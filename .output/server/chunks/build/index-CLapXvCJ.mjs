import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref, ref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { c as categoryPage } from './index-iPWIXRkA.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BdWVzNlo.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { m as makeFirstCharUpper } from './helper-Dwzg6WEl.mjs';
import { u as useAsyncData, q as queryContent } from './query-DiXo6x2D.mjs';
import { u as useHead } from './server.mjs';
import { u as useSiteConfig } from './useSiteConfig-B534vZKW.mjs';
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
import './preview-DaooDkFR.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}><div class="grid grid-cols-1 items-center"><div class="px-6"><h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-4xl my-4">${ssrInterpolate(unref(categoryPage).title)}</h1><p class="dark:text-zinc-300">${ssrInterpolate(unref(categoryPage).description)}</p></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/category/hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "card",
  __ssrInlineRender: true,
  props: {
    title: { default: "No title available" },
    count: { default: 0 }
  },
  setup(__props) {
    const color = [
      "#dc2626",
      "#d97706",
      "#65a30d",
      "#059669",
      "#0891b2",
      "#0284c7",
      "#4f46e5",
      "#7c3aed",
      "#c026d3",
      "#db2777"
    ];
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const picAColor = ref(`${color.at(getRandomInt(0, 8))}`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _cssVars = { style: {
        "--2835aa38": unref(picAColor)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-[#F1F2F4] px-5 py-3 rounded hover:underline rand-bg-color hover:scale-[1.05] transition-all duration-500" }, _attrs, _cssVars))} data-v-85234d1a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/categories/${_ctx.title.toLocaleLowerCase()}`,
        class: "text-lg font-extrabold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 data-v-85234d1a${_scopeId}>#${ssrInterpolate(_ctx.title)}(${ssrInterpolate(_ctx.count)})</h1>`);
          } else {
            return [
              createVNode("h1", null, "#" + toDisplayString(_ctx.title) + "(" + toDisplayString(_ctx.count) + ")", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/category/card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-85234d1a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("all-blog-post-for-category", () => queryContent("/blogs").sort({ _id: -1 }).find())), __temp = await __temp, __restore(), __temp);
    const allTags = /* @__PURE__ */ new Map();
    (_a = data.value) == null ? void 0 : _a.forEach((blog) => {
      const tags = blog.tags || [];
      tags.forEach((tag) => {
        if (allTags.has(tag)) {
          const cnt = allTags.get(tag);
          allTags.set(tag, cnt + 1);
        } else {
          allTags.set(tag, 1);
        }
      });
    });
    useHead({
      title: "Categories",
      meta: [
        {
          name: "description",
          content: "Below All the topics are listed on which either I have written a blog or will write a blog in near future."
        }
      ]
    });
    useSiteConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CategoryHero = _sfc_main$2;
      const _component_CategoryCard = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container max-w-5xl mx-auto text-zinc-600" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CategoryHero, null, null, _parent));
      _push(`<div class="flex flex-wrap px-6 mt-12 gap-3"><!--[-->`);
      ssrRenderList(unref(allTags), (topic) => {
        _push(ssrRenderComponent(_component_CategoryCard, {
          key: topic[0],
          title: unref(makeFirstCharUpper)(topic[0]),
          count: topic[1]
        }, null, _parent));
      });
      _push(`<!--]--></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CLapXvCJ.mjs.map
