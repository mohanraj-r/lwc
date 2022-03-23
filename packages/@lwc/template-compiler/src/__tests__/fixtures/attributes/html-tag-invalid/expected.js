import { registerTemplate, renderApi } from "lwc";
const { t: api_text, h: api_element } = renderApi;
const stc0 = {
  key: 0,
};
const stc1 = {
  attrs: {
    minlength: "1",
    maxlength: "5",
    "unknown-attr": "should-error",
  },
  key: 1,
};
function tmpl($cmp, $slotset, $ctx) {
  return [
    api_element("section", stc0, [
      api_element("textarea", stc1, [api_text("x")]),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
