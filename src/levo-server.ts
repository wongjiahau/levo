import { levoTsconfigRaw } from "./levo-tsconfig-raw.ts";
import { mimeLookup } from "./mime-lookup.ts";
import { fileExists } from "./file-exists.ts";
import { server, path, gzipEncode, brotliCompress } from "./deps.ts";
import { levoRuntimeCode } from "../levo-runtime-raw.ts";

export const levo = {
  start: async (options: server.HTTPOptions) => {
    const s = server.serve(options);
    const decoder = new TextDecoder("utf-8");

    await Deno.writeFile(
      "levo.tsconfig.json",
      new TextEncoder().encode(levoTsconfigRaw),
    );
    const bundle = async (filename: string) => {
      return decoder.decode(
        await Deno.run({
          cmd: ["deno", "bundle", "--config", "levo.tsconfig.json", filename],
          stdout: "piped",
        })
          .output(),
      );
    };

    console.log(
      `Server listening on ${options.hostname ?? "0.0.0.0"}:${options.port}`,
    );
    for await (const req of s) {
      try {
        const headers: Record<string, string> = {};
        req.headers.forEach((value, key) => {
          headers[key] = value;
        });
        console.log(new Date(), `${req.method}\nURL: ${req.url}`);
        const acceptEncoding = req.headers.get('accept-encoding')
        if (req.url.includes("levo.assets")) {
          const file = await Deno.readFile("." + req.url);
          const initialHeaders = new Headers();
          const contentType = mimeLookup(req.url);
          if (contentType) {
            initialHeaders.set("content-type", contentType);
          }

          const { body, headers } = compress({
            acceptEncoding,
            headers: initialHeaders,
            body: file
          })
          req.respond({ body, headers })
          continue
        }

        const dirname = `.${req.url}${path.SEP}`;
        const handlerPath = dirname + `levo.handle.ts`;
        if (!(await fileExists(handlerPath))) {
          console.error(`No levo.handle.ts found under ${dirname}`);
          req.respond({ status: 500 });
          continue;
        }
        const worker = new Worker(handlerPath, {
          type: "module",
          //@ts-ignore
          deno: true,
        });
        worker.postMessage({
          url: req.url,
          body: req.body,
          method: req.method,
          headers: req.headers,
        });
        worker.addEventListener(
          "message",
          async ({ data: { model, html, error } }: any) => {
            if (error) {
              console.error(error);
              req.respond({ status: 500 });
              return;
            }
            const [viewCode, updateCode, initCode] = await Promise.all([
              bundle(dirname + "levo.view.ts"),
              bundle(dirname + "levo.update.ts"),
              bundle(dirname + "levo.init.ts"),
            ]);
            const initialHeaders = new Headers();
            initialHeaders.set("content-type", "text/html");
            const { body, headers } = compress({
              acceptEncoding,
              headers: initialHeaders,
              body: new TextEncoder().encode(`
${html}
<script>
  (()=>{${viewCode.replace(/export const/gi, "const")}})();
  (()=>{${updateCode.replace(/export const/gi, "const")}})();
  (()=>{${initCode.replace(/export const/gi, "const")}})();
  (()=>{window.$levoModel=${JSON.stringify(model)}})();
  (()=>{${levoRuntimeCode}})();
</script>
              `.trim())
            })
            req.respond({ body, headers });
          },
        );
        worker.addEventListener("error", (error) => {
          req.respond({ status: 500 });
          console.error(error);
        });
        worker.addEventListener("messageerror", (error) => {
          req.respond({ status: 500 });
          console.error(error);
        });
      } catch (error) {
        console.error(error);
      }
    }
  },
};

const compress = ({
  headers,
  body,
  acceptEncoding
}: {
  headers: Headers,
  body: Uint8Array
  acceptEncoding: string | null
}): {
  headers: Headers,
  body: Uint8Array
} => {
  if (acceptEncoding?.includes('br')) {
    headers.set("content-encoding", 'br')
    const compressedFile = brotliCompress(body)
    headers.set("content-length", compressedFile.length.toString())
    return { headers, body: compressedFile, };
  }
  else if (acceptEncoding?.includes('gzip')) {
    headers.set("content-encoding", 'gzip')
    const compressedFile = gzipEncode(body)
    headers.set("content-length", compressedFile.length.toString())
    return { headers, body: compressedFile, };
  }
  else {
    return { headers, body }
  }
}
