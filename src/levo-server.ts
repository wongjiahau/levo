import { mimeLookup } from './mime-lookup.ts';
import { fileExists } from './file-exists.ts';
import { levoRuntimeCode } from './../levo-runtime-raw.ts';
import { server, mimeDB } from './deps.ts'
import { path } from './deps.ts'

export const levo = {
  start: async (options: server.HTTPOptions) => {
    const s = server.serve(options);
    const bundle = async (filename: string) =>
      new TextDecoder('utf-8').decode(
        await Deno.run({
          cmd: ['deno', 'bundle', filename],
          stdout: 'piped'
        })
          .output()
      )

    console.log(`Server listening on ${options.hostname ?? '0.0.0.0'}:${options.port}`)
    for await (const req of s) {
      try {
        const headers: Record<string, string> = {}
        req.headers.forEach((value, key) => { headers[key] = value })
        console.log(new Date(), `${req.method}\nURL: ${req.url}`)
        if(req.url.includes('levo.assets')) {
          const file = await Deno.readFile('.' + req.url)
          const headers = new Headers()
          const contentType = mimeLookup(req.url)
          if(contentType) {
            headers.set('content-type', contentType)
          }
          req.respond({
            body: file,
            headers
          })
          continue
        }

        const dirname = `.${req.url}${path.SEP}`
        const handlerPath = dirname + `levo.handle.ts`
        if(!(await fileExists(handlerPath))) {
          console.error(`No levo.handle.ts found under ${dirname}`)
          req.respond({status: 500})
          continue
        }
        const worker = new Worker(handlerPath, { 
          type: "module", 
          //@ts-ignore
          deno: true 
        });
        worker.postMessage({
          url: req.url,
          body: req.body,
          method: req.method,
          headers: req.headers
        });
        worker.addEventListener('message', async ({data: {model, html, error}}: any) => {
          if(error) {
            console.error(error)
            req.respond({status: 500})
            return
          }
          const viewCode = await bundle(dirname + 'levo.view.ts')
          const updaterCode = await bundle(dirname + 'levo.updater.ts')
          const headers = new Headers()
          headers.set('content-type', 'text/html')
          req.respond({
            headers,
            body: `
              ${html}
              <script>
                (()=>{${viewCode.replace(/export const/gi, 'const')}})();
                (()=>{${updaterCode.replace(/export const/gi, 'const')}})();
                (()=>{window.$levoModel=${JSON.stringify(model)}})();
                (()=>{${levoRuntimeCode}})();
              </script>
            `.trim(),
          });
        })
        worker.addEventListener('error', error => {
          req.respond({status: 500})
          console.error(error)
        })
        worker.addEventListener('messageerror', error => {
          req.respond({status: 500})
          console.error(error)
        })
      }
      catch(error) {
        console.error(error)
      }
    }

  }
}  
