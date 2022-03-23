import { registerTemplate, renderApi } from "lwc";
const { s: api_slot } = renderApi;
const stc0 = {
  key: 0,
};
const stc1 = [];
const stc2 = {
  key: 1,
};
function tmpl($cmp, $slotset, $ctx) {
  return [
    api_slot("", stc0, stc1, $slotset),
    api_slot("", stc2, stc1, $slotset),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];
