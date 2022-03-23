import _aB from "a/b";
import { registerTemplate, renderApi } from "lwc";
const {
  k: api_key,
  t: api_text,
  h: api_element,
  i: api_iterator,
  c: api_custom_element,
} = renderApi;
const stc0 = {
  classMap: {
    s2: true,
  },
  key: 0,
};
const stc1 = [];
function tmpl($cmp, $slotset, $ctx) {
  return [
    api_custom_element(
      "a-b",
      _aB,
      stc0,
      $cmp.isTrue
        ? api_iterator($cmp.items, function (item) {
            return api_element(
              "p",
              {
                key: api_key(1, item.id),
              },
              [api_text("X")]
            );
          })
        : stc1
    ),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
