import { registerTemplate, renderApi } from "lwc";
const { t: api_text, h: api_element } = renderApi;
const stc0 = {
  key: 0,
};
const stc1 = {
  key: 1,
};
const stc2 = {
  key: 2,
};
const stc3 = {
  key: 3,
};
function tmpl($cmp, $slotset, $ctx) {
  return [
    api_element("section", stc0, [
      api_element("p", stc1, [api_text("1")]),
      $cmp.bar ? api_element("p", stc2, [api_text("2")]) : null,
      api_element("p", stc3, [api_text("3")]),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
