import _sfc_main$1 from './ContentRenderer-oF9kOSRE.mjs';
import _sfc_main$2 from './ContentRendererMarkdown-DGQlqgwI.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as useRoute } from './server.mjs';
import { u as useAsyncData, q as queryContent, a as useContentDisabled } from './query-DiXo6x2D.mjs';
import { u as useContentHead } from './head-CHFGcXtV.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'node:url';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'ipx';
import 'property-information';
import './node-04k6j4dz.mjs';
import './preview-DaooDkFR.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `get-document-${route.path}`,
      () => queryContent(route.path).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const { page } = useContentDisabled();
    useContentHead(page);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      const _component_ContentRendererMarkdown = _sfc_main$2;
      _push(`<main${ssrRenderAttrs(_attrs)}><article class="prose max-w-full">`);
      if (unref(data)) {
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(data),
          tag: "article"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<header${_scopeId}>${ssrInterpolate(unref(data).title)} <address class="author"${_scopeId}>${ssrInterpolate(unref(data).author)}</address></header>`);
              _push2(ssrRenderComponent(_component_ContentRendererMarkdown, { value: unref(data) }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("header", null, [
                  createTextVNode(toDisplayString(unref(data).title) + " ", 1),
                  createVNode("address", { class: "author" }, toDisplayString(unref(data).author), 1)
                ]),
                createVNode(_component_ContentRendererMarkdown, { value: unref(data) }, null, 8, ["value"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</article></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DA2yy7NY.mjs.map
