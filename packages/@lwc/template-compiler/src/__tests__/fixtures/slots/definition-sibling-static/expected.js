import { registerTemplate, renderApi } from "lwc";
const { t: api_text, h: api_element, s: api_slot } = renderApi;
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
      api_element("p", stc1, [api_text("Sibling")]),
      api_slot(
        "",
        stc2,
        [api_element("p", stc3, [api_text("Default slot content")])],
        $slotset
      ),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];
