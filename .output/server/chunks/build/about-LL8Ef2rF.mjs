import { _ as __nuxt_component_0 } from './nuxt-link-BdWVzNlo.mjs';
import __nuxt_component_1 from './Icon-H3opb0lx.mjs';
import { _ as _sfc_main$1 } from './NuxtImg-BJKQrgvQ.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { f as footerData, a as aboutPage } from './index-iPWIXRkA.mjs';
import { u as useHead } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'node:url';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-BeKxkWR8.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About",
      meta: [
        {
          name: "description",
          content: footerData.aboutAuthor
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5" }, _attrs))}><div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl mx-auto"><div class="col-span-5 max-w-md"><div class="flex justify-between"><div><h1 class="text-xl sm:text-4xl pb-2 font-bold">${ssrInterpolate(unref(aboutPage).title)}</h1><div class="my-3 space-x-2 md:space-x-3 pb-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://myurioka.github.com",
        target: "_blank",
        class: "px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]",
        "aria-label": "Github"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa:github",
              size: "1em"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa:github",
                size: "1em"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="sm:hidden block col-span-3 pb-5 dark:text-[#F1F2F4]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/about.jpg",
        width: "125",
        height: "115",
        quality: "50",
        class: "rounded-md"
      }, null, _parent));
      _push(`</div></div><h3 class="text-base sm:text-3xl font-semibold pb-7 sm:pb-12">${ssrInterpolate(unref(aboutPage).description)}</h3><p>${ssrInterpolate(unref(aboutPage).aboutMe)}</p></div><div class="hidden sm:block col-span-3">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/about.jpg",
        width: "450",
        height: "500",
        quality: "50",
        class: "rounded-md"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-LL8Ef2rF.mjs.map
