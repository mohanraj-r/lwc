import { registerTemplate, renderApi, sanitizeAttribute } from "lwc";
const { fid: api_scoped_frag_id, h: api_element } = renderApi;
const stc0 = {
  classMap: {
    "slds-icon": true,
  },
  attrs: {
    "aria-hidden": "true",
    title: "when needed",
  },
  key: 0,
  svg: true,
};
function tmpl($cmp, $slotset, $ctx) {
  return [
    api_element("svg", stc0, [
      api_element("use", {
        attrs: {
          "xlink:href": sanitizeAttribute(
            "use",
            "http://www.w3.org/2000/svg",
            "xlink:href",
            api_scoped_frag_id($cmp.getXLink)
          ),
        },
        key: 1,
        svg: true,
      }),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
