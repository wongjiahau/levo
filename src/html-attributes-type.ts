/**
 * Generated by scripts/scrape-attribute-types.js
 */

export type AllElements =
  & GlobalAttributes
  & (
    | ElementWithoutDedicatedAttributes
    | Element_form
    | Element_input
    | Element_applet
    | Element_caption
    | Element_col
    | Element_colgroup
    | Element_hr
    | Element_iframe
    | Element_img
    | Element_table
    | Element_tbody
    | Element_td
    | Element_tfoot
    | Element_th
    | Element_thead
    | Element_tr
    | Element_area
    | Element_script
    | Element_select
    | Element_textarea
    | Element_button
    | Element_keygen
    | Element_audio
    | Element_video
    | Element_body
    | Element_marquee
    | Element_object
    | Element_meta
    | Element_command
    | Element_blockquote
    | Element_del
    | Element_ins
    | Element_q
    | Element_basefont
    | Element_font
    | Element_link
    | Element_time
    | Element_track
    | Element_fieldset
    | Element_optgroup
    | Element_option
    | Element_a
    | Element_contenteditable
    | Element_label
    | Element_output
    | Element_meter
    | Element_progress
    | Element_canvas
    | Element_embed
    | Element_base
    | Element_bgsound
    | Element_html
    | Element_source
    | Element_style
    | Element_map
    | Element_param
    | Element_details
    | Element_ol
    | Element_menu
    | Element_data
    | Element_li
  );

export type ElementWithoutDedicatedAttributes = {
  $:
    | "head"
    | "title"
    | "address"
    | "article"
    | "aside"
    | "footer"
    | "header"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "hgroup"
    | "main"
    | "nav"
    | "section"
    | "cite"
    | "dd"
    | "dt"
    | "dl"
    | "div"
    | "figcaption"
    | "figure"
    | "p"
    | "pre"
    | "ul"
    | "abbr"
    | "b"
    | "bdi"
    | "bdo"
    | "br"
    | "code"
    | "dfn"
    | "em"
    | "i"
    | "kbd"
    | "mark"
    | "rb"
    | "ruby"
    | "rp"
    | "rt"
    | "rtc"
    | "s"
    | "samp"
    | "small"
    | "span"
    | "strong"
    | "sub"
    | "sup"
    | "u"
    | "var"
    | "wbr"
    | "picture"
    | "noscript"
    | "datalist"
    | "legend"
    | "dialog"
    | "summary"
    | "slot"
    | "template"
    | "acronym"
    | "big"
    | "blink"
    | "center"
    | "content"
    | "dir"
    | "element"
    | "frame"
    | "frameset"
    | "image"
    | "isindex"
    | "listing"
    | "menuitem"
    | "multicol"
    | "nextid"
    | "nobr"
    | "noembed"
    | "noframes"
    | "plaintext"
    | "shadow"
    | "spacer"
    | "strike"
    | "tt"
    | "xmp";
};

export type Element_form =
  & { $: "form" }
  & Attribute_accept
  & Attribute_accept_charset
  & Attribute_action
  & Attribute_autocomplete
  & Attribute_enctype
  & Attribute_method
  & Attribute_name
  & Attribute_novalidate
  & Attribute_target;

export type Element_input =
  & { $: "input" }
  & Attribute_accept
  & Attribute_alt
  & Attribute_autocomplete
  & Attribute_autofocus
  & Attribute_capture
  & Attribute_checked
  & Attribute_dirname
  & Attribute_disabled
  & Attribute_form
  & Attribute_formaction
  & Attribute_formenctype
  & Attribute_formmethod
  & Attribute_formnovalidate
  & Attribute_formtarget
  & Attribute_height
  & Attribute_list
  & Attribute_max
  & Attribute_maxlength
  & Attribute_minlength
  & Attribute_min
  & Attribute_multiple
  & Attribute_name
  & Attribute_pattern
  & Attribute_placeholder
  & Attribute_readonly
  & Attribute_required
  & Attribute_size
  & Attribute_src
  & Attribute_step
  & Attribute_type
  & Attribute_usemap
  & Attribute_value
  & Attribute_width;

export type GlobalAttributes =
  & Attribute_accesskey
  & Attribute_autocapitalize
  & Attribute_class
  & Attribute_contenteditable
  & Attribute_contextmenu
  & Attribute_data__
  & Attribute_dir
  & Attribute_draggable
  & Attribute_dropzone
  & Attribute_hidden
  & Attribute_id
  & Attribute_itemprop
  & Attribute_lang
  & Attribute_slot
  & Attribute_spellcheck
  & Attribute_tabindex
  & Attribute_title
  & Attribute_translate;

export type Element_applet =
  & { $: "applet" }
  & Attribute_align
  & Attribute_alt
  & Attribute_code
  & Attribute_codebase;

export type Element_caption =
  & { $: "caption" }
  & Attribute_align;

export type Element_col =
  & { $: "col" }
  & Attribute_align
  & Attribute_bgcolor
  & Attribute_span;

export type Element_colgroup =
  & { $: "colgroup" }
  & Attribute_align
  & Attribute_bgcolor
  & Attribute_span;

export type Element_hr =
  & { $: "hr" }
  & Attribute_align
  & Attribute_color;

export type Element_iframe =
  & { $: "iframe" }
  & Attribute_align
  & Attribute_allow
  & Attribute_csp
  & Attribute_height
  & Attribute_importance
  & Attribute_loading
  & Attribute_name
  & Attribute_referrerpolicy
  & Attribute_sandbox
  & Attribute_src
  & Attribute_srcdoc
  & Attribute_width;

export type Element_img =
  & { $: "img" }
  & Attribute_align
  & Attribute_alt
  & Attribute_border
  & Attribute_crossorigin
  & Attribute_decoding
  & Attribute_height
  & Attribute_importance
  & Attribute_intrinsicsize
  & Attribute_ismap
  & Attribute_loading
  & Attribute_referrerpolicy
  & Attribute_sizes
  & Attribute_src
  & Attribute_srcset
  & Attribute_usemap
  & Attribute_width;

export type Element_table =
  & { $: "table" }
  & Attribute_align
  & Attribute_background
  & Attribute_bgcolor
  & Attribute_border
  & Attribute_summary;

export type Element_tbody =
  & { $: "tbody" }
  & Attribute_align
  & Attribute_bgcolor;

export type Element_td =
  & { $: "td" }
  & Attribute_align
  & Attribute_background
  & Attribute_bgcolor
  & Attribute_colspan
  & Attribute_headers
  & Attribute_rowspan;

export type Element_tfoot =
  & { $: "tfoot" }
  & Attribute_align
  & Attribute_bgcolor;

export type Element_th =
  & { $: "th" }
  & Attribute_align
  & Attribute_background
  & Attribute_bgcolor
  & Attribute_colspan
  & Attribute_headers
  & Attribute_rowspan
  & Attribute_scope;

export type Element_thead =
  & { $: "thead" }
  & Attribute_align;

export type Element_tr =
  & { $: "tr" }
  & Attribute_align
  & Attribute_bgcolor;

export type Element_area =
  & { $: "area" }
  & Attribute_alt
  & Attribute_coords
  & Attribute_download
  & Attribute_href
  & Attribute_hreflang
  & Attribute_media
  & Attribute_ping
  & Attribute_referrerpolicy
  & Attribute_rel
  & Attribute_shape
  & Attribute_target;

export type Element_script =
  & { $: "script" }
  & Attribute_async
  & Attribute_charset
  & Attribute_crossorigin
  & Attribute_defer
  & Attribute_importance
  & Attribute_integrity
  & Attribute_language
  & Attribute_referrerpolicy
  & Attribute_src
  & Attribute_type;

export type Element_select =
  & { $: "select" }
  & Attribute_autocomplete
  & Attribute_autofocus
  & Attribute_disabled
  & Attribute_form
  & Attribute_multiple
  & Attribute_name
  & Attribute_required
  & Attribute_size;

export type Element_textarea =
  & { $: "textarea" }
  & Attribute_autocomplete
  & Attribute_autofocus
  & Attribute_cols
  & Attribute_dirname
  & Attribute_disabled
  & Attribute_enterkeyhint
  & Attribute_form
  & Attribute_inputmode
  & Attribute_maxlength
  & Attribute_minlength
  & Attribute_name
  & Attribute_placeholder
  & Attribute_readonly
  & Attribute_required
  & Attribute_rows
  & Attribute_wrap;

export type Element_button =
  & { $: "button" }
  & Attribute_autofocus
  & Attribute_disabled
  & Attribute_form
  & Attribute_formaction
  & Attribute_formenctype
  & Attribute_formmethod
  & Attribute_formnovalidate
  & Attribute_formtarget
  & Attribute_name
  & Attribute_type
  & Attribute_value;

export type Element_keygen =
  & { $: "keygen" }
  & Attribute_autofocus
  & Attribute_challenge
  & Attribute_disabled
  & Attribute_form
  & Attribute_keytype
  & Attribute_name;

export type Element_audio =
  & { $: "audio" }
  & Attribute_autoplay
  & Attribute_buffered
  & Attribute_controls
  & Attribute_crossorigin
  & Attribute_loop
  & Attribute_muted
  & Attribute_preload
  & Attribute_src;

export type Element_video =
  & { $: "video" }
  & Attribute_autoplay
  & Attribute_buffered
  & Attribute_controls
  & Attribute_crossorigin
  & Attribute_height
  & Attribute_loop
  & Attribute_muted
  & Attribute_poster
  & Attribute_preload
  & Attribute_src
  & Attribute_width;

export type Element_body =
  & { $: "body" }
  & Attribute_background
  & Attribute_bgcolor;

export type Element_marquee =
  & { $: "marquee" }
  & Attribute_bgcolor
  & Attribute_loop;

export type Element_object =
  & { $: "object" }
  & Attribute_border
  & Attribute_data
  & Attribute_form
  & Attribute_height
  & Attribute_name
  & Attribute_type
  & Attribute_usemap
  & Attribute_width;

export type Element_meta =
  & { $: "meta" }
  & Attribute_charset
  & Attribute_content
  & Attribute_http_equiv
  & Attribute_name;

export type Element_command =
  & { $: "command" }
  & Attribute_checked
  & Attribute_disabled
  & Attribute_icon
  & Attribute_radiogroup
  & Attribute_type;

export type Element_blockquote =
  & { $: "blockquote" }
  & Attribute_cite;

export type Element_del =
  & { $: "del" }
  & Attribute_cite
  & Attribute_datetime;

export type Element_ins =
  & { $: "ins" }
  & Attribute_cite
  & Attribute_datetime;

export type Element_q =
  & { $: "q" }
  & Attribute_cite;

export type Element_basefont =
  & { $: "basefont" }
  & Attribute_color;

export type Element_font =
  & { $: "font" }
  & Attribute_color;

export type Element_link =
  & { $: "link" }
  & Attribute_crossorigin
  & Attribute_href
  & Attribute_hreflang
  & Attribute_importance
  & Attribute_integrity
  & Attribute_media
  & Attribute_referrerpolicy
  & Attribute_rel
  & Attribute_sizes;

export type Element_time =
  & { $: "time" }
  & Attribute_datetime;

export type Element_track =
  & { $: "track" }
  & Attribute_default
  & Attribute_kind
  & Attribute_label
  & Attribute_src
  & Attribute_srclang;

export type Element_fieldset =
  & { $: "fieldset" }
  & Attribute_disabled
  & Attribute_form
  & Attribute_name;

export type Element_optgroup =
  & { $: "optgroup" }
  & Attribute_disabled
  & Attribute_label;

export type Element_option =
  & { $: "option" }
  & Attribute_disabled
  & Attribute_label
  & Attribute_selected
  & Attribute_value;

export type Element_a =
  & { $: "a" }
  & Attribute_download
  & Attribute_href
  & Attribute_hreflang
  & Attribute_media
  & Attribute_ping
  & Attribute_referrerpolicy
  & Attribute_rel
  & Attribute_shape
  & Attribute_target;

export type Element_contenteditable =
  & { $: "contenteditable" }
  & Attribute_enterkeyhint
  & Attribute_inputmode;

export type Element_label =
  & { $: "label" }
  & Attribute_for
  & Attribute_form;

export type Element_output =
  & { $: "output" }
  & Attribute_for
  & Attribute_form
  & Attribute_name;

export type Element_meter =
  & { $: "meter" }
  & Attribute_form
  & Attribute_high
  & Attribute_low
  & Attribute_max
  & Attribute_min
  & Attribute_optimum
  & Attribute_value;

export type Element_progress =
  & { $: "progress" }
  & Attribute_form
  & Attribute_max
  & Attribute_value;

export type Element_canvas =
  & { $: "canvas" }
  & Attribute_height
  & Attribute_width;

export type Element_embed =
  & { $: "embed" }
  & Attribute_height
  & Attribute_src
  & Attribute_type
  & Attribute_width;

export type Element_base =
  & { $: "base" }
  & Attribute_href
  & Attribute_target;

export type Element_bgsound =
  & { $: "bgsound" }
  & Attribute_loop;

export type Element_html =
  & { $: "html" }
  & Attribute_manifest;

export type Element_source =
  & { $: "source" }
  & Attribute_media
  & Attribute_sizes
  & Attribute_src
  & Attribute_srcset
  & Attribute_type;

export type Element_style =
  & { $: "style" }
  & Attribute_media
  & Attribute_scoped
  & Attribute_type;

export type Element_map =
  & { $: "map" }
  & Attribute_name;

export type Element_param =
  & { $: "param" }
  & Attribute_name
  & Attribute_value;

export type Element_details =
  & { $: "details" }
  & Attribute_open;

export type Element_ol =
  & { $: "ol" }
  & Attribute_reversed
  & Attribute_start;

export type Element_menu =
  & { $: "menu" }
  & Attribute_type;

export type Element_data =
  & { $: "data" }
  & Attribute_value;

export type Element_li =
  & { $: "li" }
  & Attribute_value;

export type Attribute_accept = {
  /**
   * List of types the server accepts, typically a file type.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
   */
  "accept"?: string;
};

export type Attribute_accept_charset = {
  /**
   * List of supported charsets.  
   * 
   */
  "accept-charset"?: string;
};

export type Attribute_accesskey = {
  /**
   * Keyboard shortcut to activate or add focus to the element.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey
   */
  "accesskey"?: string;
};

export type Attribute_action = {
  /**
   * The URI of a program that processes the information submitted via the form.  
   * 
   */
  "action"?: string;
};

export type Attribute_align = {
  /**
   * Specifies the horizontal alignment of the element.  
   * 
   */
  "align"?: string;
};

export type Attribute_allow = {
  /**
   * Specifies a feature-policy for the iframe.  
   * 
   */
  "allow"?: string;
};

export type Attribute_alt = {
  /**
   * Alternative text in case an image can't be displayed.  
   * 
   */
  "alt"?: string;
};

export type Attribute_async = {
  /**
   * Executes the script asynchronously.  
   * 
   */
  "async"?: string;
};

export type Attribute_autocapitalize = {
  /**
   * Sets whether input is automatically capitalized when entered by user  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
   */
  "autocapitalize"?: string;
};

export type Attribute_autocomplete = {
  /**
   * Indicates whether controls in this form can by default have their values automatically completed by the browser.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  "autocomplete"?: string;
};

export type Attribute_autofocus = {
  /**
   * The element should be automatically focused after the page loaded.  
   * 
   */
  "autofocus"?: string;
};

export type Attribute_autoplay = {
  /**
   * The audio or video should play as soon as possible.  
   * 
   */
  "autoplay"?: string;
};

export type Attribute_background = {
  /**
   * Specifies the URL of an image file.
   * Note: Although browsers and email clients may still support this attribute, it is obsolete. Use CSS background-image instead.  
   * 
   */
  "background"?: string;
};

export type Attribute_bgcolor = {
  /**
   * Background color of the element.
   * 
   * Note: This is a legacy attribute. Please use the CSS background-color property instead.  
   * 
   */
  "bgcolor"?: string;
};

export type Attribute_border = {
  /**
   * The border width.
   * 
   * Note: This is a legacy attribute. Please use the CSS border property instead.  
   * 
   */
  "border"?: string;
};

export type Attribute_buffered = {
  /**
   * Contains the time range of already buffered media.  
   * 
   */
  "buffered"?: string;
};

export type Attribute_capture = {
  /**
   * From the HTML Media Capture
   * The definition of 'media capture' in that specification.spec, specifies a new file can be captured.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture
   */
  "capture"?: string;
};

export type Attribute_challenge = {
  /**
   * A challenge string that is submitted along with the public key.  
   * 
   */
  "challenge"?: string;
};

export type Attribute_charset = {
  /**
   * Declares the character encoding of the page or script.  
   * 
   */
  "charset"?: string;
};

export type Attribute_checked = {
  /**
   * Indicates whether the element should be checked on page load.  
   * 
   */
  "checked"?: string;
};

export type Attribute_cite = {
  /**
   * Contains a URI which points to the source of the quote or change.  
   * 
   */
  "cite"?: string;
};

export type Attribute_class = {
  /**
   * Often used with CSS to style elements with common properties.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   */
  "class"?: string;
};

export type Attribute_code = {
  /**
   * Specifies the URL of the applet's class file to be loaded and executed.  
   * 
   */
  "code"?: string;
};

export type Attribute_codebase = {
  /**
   * This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored.  
   * 
   */
  "codebase"?: string;
};

export type Attribute_color = {
  /**
   * This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.
   * 
   * Note: This is a legacy attribute. Please use the CSS color property instead.  
   * 
   */
  "color"?: string;
};

export type Attribute_cols = {
  /**
   * Defines the number of columns in a textarea.  
   * 
   */
  "cols"?: string;
};

export type Attribute_colspan = {
  /**
   * The colspan attribute defines the number of columns a cell should span.  
   * 
   */
  "colspan"?: string;
};

export type Attribute_content = {
  /**
   * A value associated with http-equiv or name depending on the context.  
   * 
   */
  "content"?: string;
};

export type Attribute_contenteditable = {
  /**
   * Indicates whether the element's content is editable.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable
   */
  "contenteditable"?: string;
};

export type Attribute_contextmenu = {
  /**
   * Defines the ID of a <menu> element which will serve as the element's context menu.  
   * 
   */
  "contextmenu"?: string;
};

export type Attribute_controls = {
  /**
   * Indicates whether the browser should show playback controls to the user.  
   * 
   */
  "controls"?: string;
};

export type Attribute_coords = {
  /**
   * A set of values specifying the coordinates of the hot-spot region.  
   * 
   */
  "coords"?: string;
};

export type Attribute_crossorigin = {
  /**
   * How the element handles cross-origin requests  
   * Reference: https://developer.mozilla.org/docs/Web/HTML/CORS_settings_attributes
   */
  "crossorigin"?: string;
};

export type Attribute_csp = {
  /**
   * Specifies the Content Security Policy that an embedded document must agree to enforce upon itself.  
   * Reference: https://developer.mozilla.org/docs/Web/API/HTMLiframeElement/csp
   */
  "csp"?: string;
};

export type Attribute_data = {
  /**
   * Specifies the URL of the resource.  
   * 
   */
  "data"?: string;
};

export type Attribute_data__ = {
  /**
   * Lets you attach custom attributes to an HTML element.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*
   */
  "data-*"?: string;
};

export type Attribute_datetime = {
  /**
   * Indicates the date and time associated with the element.  
   * 
   */
  "datetime"?: string;
};

export type Attribute_decoding = {
  /**
   * Indicates the preferred method to decode the image.  
   * 
   */
  "decoding"?: string;
};

export type Attribute_default = {
  /**
   * Indicates that the track should be enabled unless the user's preferences indicate something different.  
   * 
   */
  "default"?: string;
};

export type Attribute_defer = {
  /**
   * Indicates that the script should be executed after the page has been parsed.  
   * 
   */
  "defer"?: string;
};

export type Attribute_dir = {
  /**
   * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
   */
  "dir"?: string;
};

export type Attribute_dirname = {
  /**
   *   
   * 
   */
  "dirname"?: string;
};

export type Attribute_disabled = {
  /**
   * Indicates whether the user can interact with the element.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled
   */
  "disabled"?: string;
};

export type Attribute_download = {
  /**
   * Indicates that the hyperlink is to be used for downloading a resource.  
   * 
   */
  "download"?: string;
};

export type Attribute_draggable = {
  /**
   * Defines whether the element can be dragged.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable
   */
  "draggable"?: string;
};

export type Attribute_dropzone = {
  /**
   * Indicates that the element accepts the dropping of content onto it.  
   * 
   */
  "dropzone"?: string;
};

export type Attribute_enctype = {
  /**
   * Defines the content export type of the form data when the method is POST.  
   * 
   */
  "enctype"?: string;
};

export type Attribute_enterkeyhint = {
  /**
   * The enterkeyhint specifies what action label (or icon) to present for the enter key on virtual keyboards. The attribute can be used with form controls (such as the value of textarea elements), or in elements in an editing host (e.g., using contenteditable attribute).  
   * 
   */
  "enterkeyhint"?: string;
};

export type Attribute_for = {
  /**
   * Describes elements which belongs to this one.  
   * 
   */
  "for"?: string;
};

export type Attribute_form = {
  /**
   * Indicates the form that is the owner of the element.  
   * 
   */
  "form"?: string;
};

export type Attribute_formaction = {
  /**
   * Indicates the action of the element, overriding the action defined in the <form>.  
   * 
   */
  "formaction"?: string;
};

export type Attribute_formenctype = {
  /**
   * If the button/input is a submit button (type="submit"), this attribute sets the encoding export type to use during form submission. If this attribute is specified, it overrides the encexport type attribute of the button's form owner.  
   * 
   */
  "formenctype"?: string;
};

export type Attribute_formmethod = {
  /**
   * If the button/input is a submit button (type="submit"), this attribute sets the submission method to use during form submission (GET, POST, etc.). If this attribute is specified, it overrides the method attribute of the button's form owner.  
   * 
   */
  "formmethod"?: string;
};

export type Attribute_formnovalidate = {
  /**
   * If the button/input is a submit button (type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner.  
   * 
   */
  "formnovalidate"?: string;
};

export type Attribute_formtarget = {
  /**
   * If the button/input is a submit button (type="submit"), this attribute specifies the browsing context (for example, tab, window, or inline frame) in which to display the response that is received after submitting the form. If this attribute is specified, it overrides the target attribute of the button's form owner.  
   * 
   */
  "formtarget"?: string;
};

export type Attribute_headers = {
  /**
   * IDs of the <th> elements which applies to this element.  
   * 
   */
  "headers"?: string;
};

export type Attribute_height = {
  /**
   * Specifies the height of elements listed here. For all other elements, use the CSS height property.
   * 
   * Note: In some instances, such as <div>, this is a legacy attribute, in which case the CSS height property should be used instead.  
   * 
   */
  "height"?: string;
};

export type Attribute_hidden = {
  /**
   * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden
   */
  "hidden"?: string;
};

export type Attribute_high = {
  /**
   * Indicates the lower bound of the upper range.  
   * 
   */
  "high"?: string;
};

export type Attribute_href = {
  /**
   * The URL of a linked resource.  
   * 
   */
  "href"?: string;
};

export type Attribute_hreflang = {
  /**
   * Specifies the language of the linked resource.  
   * 
   */
  "hreflang"?: string;
};

export type Attribute_http_equiv = {
  /**
   * Defines a pragma directive.  
   * 
   */
  "http-equiv"?: string;
};

export type Attribute_icon = {
  /**
   * Specifies a picture which represents the command.  
   * 
   */
  "icon"?: string;
};

export type Attribute_id = {
  /**
   * Often used with CSS to style a specific element. The value of this attribute must be unique.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
   */
  "id"?: string;
};

export type Attribute_importance = {
  /**
   * Indicates the relative fetch priority for the resource.  
   * 
   */
  "importance"?: string;
};

export type Attribute_integrity = {
  /**
   * Specifies a Subresource Integrity value that allows browsers to verify what they fetch.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
   */
  "integrity"?: string;
};

export type Attribute_intrinsicsize = {
  /**
   * This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it’s the size specified in the attribute.  
   * 
   */
  "intrinsicsize"?: string;
};

export type Attribute_inputmode = {
  /**
   * Provides a hint as to the export type of data that might be entered by the user while editing the element or its contents. The attribute can be used with form controls (such as the value of textarea elements), or in elements in an editing host (e.g., using contenteditable attribute).  
   * 
   */
  "inputmode"?: string;
};

export type Attribute_ismap = {
  /**
   * Indicates that the image is part of a server-side image map.  
   * 
   */
  "ismap"?: string;
};

export type Attribute_itemprop = {
  /**
   *   
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemprop
   */
  "itemprop"?: string;
};

export type Attribute_keytype = {
  /**
   * Specifies the export type of key generated.  
   * 
   */
  "keytype"?: string;
};

export type Attribute_kind = {
  /**
   * Specifies the kind of text track.  
   * 
   */
  "kind"?: string;
};

export type Attribute_label = {
  /**
   * Specifies a user-readable title of the element.  
   * 
   */
  "label"?: string;
};

export type Attribute_lang = {
  /**
   * Defines the language used in the element.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
   */
  "lang"?: string;
};

export type Attribute_language = {
  /**
   * Defines the script language used in the element.  
   * 
   */
  "language"?: string;
};

export type Attribute_loading = {
  /**
   * Indicates if the element should be loaded lazily (loading="lazy") or loaded immediately (loading="eager").
   * WIP: WHATWG PR #3752  
   * 
   */
  "loading "?: string;
};

export type Attribute_list = {
  /**
   * Identifies a list of pre-defined options to suggest to the user.  
   * 
   */
  "list"?: string;
};

export type Attribute_loop = {
  /**
   * Indicates whether the media should start playing from the start when it's finished.  
   * 
   */
  "loop"?: string;
};

export type Attribute_low = {
  /**
   * Indicates the upper bound of the lower range.  
   * 
   */
  "low"?: string;
};

export type Attribute_manifest = {
  /**
   * Specifies the URL of the document's cache manifest.
   * Note: This attribute is obsolete, use <link rel="manifest"> instead.  
   * 
   */
  "manifest"?: string;
};

export type Attribute_max = {
  /**
   * Indicates the maximum value allowed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max
   */
  "max"?: string;
};

export type Attribute_maxlength = {
  /**
   * Defines the maximum number of characters allowed in the element.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength
   */
  "maxlength"?: string;
};

export type Attribute_minlength = {
  /**
   * Defines the minimum number of characters allowed in the element.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/minlength
   */
  "minlength"?: string;
};

export type Attribute_media = {
  /**
   * Specifies a hint of the media for which the linked resource was designed.  
   * 
   */
  "media"?: string;
};

export type Attribute_method = {
  /**
   * Defines which HTTP method to use when submitting the form. Can be GET (default) or POST.  
   * 
   */
  "method"?: string;
};

export type Attribute_min = {
  /**
   * Indicates the minimum value allowed.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min
   */
  "min"?: string;
};

export type Attribute_multiple = {
  /**
   * Indicates whether multiple values can be entered in an input of the export type email or file.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple
   */
  "multiple"?: string;
};

export type Attribute_muted = {
  /**
   * Indicates whether the audio will be initially silenced on page load.  
   * 
   */
  "muted"?: string;
};

export type Attribute_name = {
  /**
   * Name of the element. For example used by the server to identify the fields in form submits.  
   * 
   */
  "name"?: string;
};

export type Attribute_novalidate = {
  /**
   * This attribute indicates that the form shouldn't be validated when submitted.  
   * 
   */
  "novalidate"?: string;
};

export type Attribute_open = {
  /**
   * Indicates whether the details will be shown on page load.  
   * 
   */
  "open"?: string;
};

export type Attribute_optimum = {
  /**
   * Indicates the optimal numeric value.  
   * 
   */
  "optimum"?: string;
};

export type Attribute_pattern = {
  /**
   * Defines a regular expression which the element's value will be validated against.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern
   */
  "pattern"?: string;
};

export type Attribute_ping = {
  /**
   * The ping attribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-ping
   */
  "ping"?: string;
};

export type Attribute_placeholder = {
  /**
   * Provides a hint to the user of what can be entered in the field.  
   * 
   */
  "placeholder"?: string;
};

export type Attribute_poster = {
  /**
   * A URL indicating a poster frame to show until the user plays or seeks.  
   * 
   */
  "poster"?: string;
};

export type Attribute_preload = {
  /**
   * Indicates whether the whole resource, parts of it or nothing should be preloaded.  
   * 
   */
  "preload"?: string;
};

export type Attribute_radiogroup = {
  /**
   *   
   * 
   */
  "radiogroup"?: string;
};

export type Attribute_readonly = {
  /**
   * Indicates whether the element can be edited.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly
   */
  "readonly"?: string;
};

export type Attribute_referrerpolicy = {
  /**
   * Specifies which referrer is sent when fetching the resource.  
   * 
   */
  "referrerpolicy"?: string;
};

export type Attribute_rel = {
  /**
   * Specifies the relationship of the target object to the link object.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel
   */
  "rel"?: string;
};

export type Attribute_required = {
  /**
   * Indicates whether this element is required to fill out or not.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required
   */
  "required"?: string;
};

export type Attribute_reversed = {
  /**
   * Indicates whether the list should be displayed in a descending order instead of a ascending.  
   * 
   */
  "reversed"?: string;
};

export type Attribute_rows = {
  /**
   * Defines the number of rows in a text area.  
   * 
   */
  "rows"?: string;
};

export type Attribute_rowspan = {
  /**
   * Defines the number of rows a table cell should span over.  
   * 
   */
  "rowspan"?: string;
};

export type Attribute_sandbox = {
  /**
   * Stops a document loaded in an iframe from using certain features (such as submitting forms or opening new windows).  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox
   */
  "sandbox"?: string;
};

export type Attribute_scope = {
  /**
   * Defines the cells that the header test (defined in the th element) relates to.  
   * 
   */
  "scope"?: string;
};

export type Attribute_scoped = {
  /**
   *   
   * 
   */
  "scoped"?: string;
};

export type Attribute_selected = {
  /**
   * Defines a value which will be selected on page load.  
   * 
   */
  "selected"?: string;
};

export type Attribute_shape = {
  /**
   *   
   * 
   */
  "shape"?: string;
};

export type Attribute_size = {
  /**
   * Defines the width of the element (in pixels). If the element's export type attribute is text or password then it's the number of characters.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size
   */
  "size"?: string;
};

export type Attribute_sizes = {
  /**
   *   
   * 
   */
  "sizes"?: string;
};

export type Attribute_slot = {
  /**
   * Assigns a slot in a shadow DOM shadow tree to an element.  
   * 
   */
  "slot"?: string;
};

export type Attribute_span = {
  /**
   *   
   * 
   */
  "span"?: string;
};

export type Attribute_spellcheck = {
  /**
   * Indicates whether spell checking is allowed for the element.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck
   */
  "spellcheck"?: string;
};

export type Attribute_src = {
  /**
   * The URL of the embeddable content.  
   * 
   */
  "src"?: string;
};

export type Attribute_srcdoc = {
  /**
   *   
   * 
   */
  "srcdoc"?: string;
};

export type Attribute_srclang = {
  /**
   *   
   * 
   */
  "srclang"?: string;
};

export type Attribute_srcset = {
  /**
   * One or more responsive image candidates.  
   * 
   */
  "srcset"?: string;
};

export type Attribute_start = {
  /**
   * Defines the first number if other than 1.  
   * 
   */
  "start"?: string;
};

export type Attribute_step = {
  /**
   *   
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step
   */
  "step"?: string;
};

export type Attribute_summary = {
  /**
   *   
   * 
   */
  "summary"?: string;
};

export type Attribute_tabindex = {
  /**
   * Overrides the browser's default tab order and follows the one specified instead.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   */
  "tabindex"?: string;
};

export type Attribute_target = {
  /**
   *   
   * 
   */
  "target"?: string;
};

export type Attribute_title = {
  /**
   * Text to be displayed in a tooltip when hovering over the element.  
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title
   */
  "title"?: string;
};

export type Attribute_translate = {
  /**
   * Specify whether an element’s attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged.  
   * 
   */
  "translate"?: string;
};

export type Attribute_type = {
  /**
   * Defines the export type of the element.  
   * 
   */
  "type"?: string;
};

export type Attribute_usemap = {
  /**
   *   
   * 
   */
  "usemap"?: string;
};

export type Attribute_value = {
  /**
   * Defines a default value which will be displayed in the element on page load.  
   * 
   */
  "value"?: string;
};

export type Attribute_width = {
  /**
   * For the elements listed here, this establishes the element's width.
   * 
   * Note: For all other instances, such as <div>, this is a legacy attribute, in which case the CSS width property should be used instead.  
   * 
   */
  "width"?: string;
};

export type Attribute_wrap = {
  /**
   * Indicates whether the text should be wrapped.  
   * 
   */
  "wrap"?: string;
};
