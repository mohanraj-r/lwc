import { registerTemplate, renderApi } from "lwc";
const { t: api_text } = renderApi;
function tmpl($cmp, $slotset, $ctx) {
  return [api_text("Hello world")];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
