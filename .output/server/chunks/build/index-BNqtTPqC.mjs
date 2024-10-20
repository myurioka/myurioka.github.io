import { useSSRContext, defineComponent, withAsyncContext, ref, computed, resolveDirective, mergeProps, unref, withCtx, createVNode, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { b as blogsPage } from './index-iPWIXRkA.mjs';
import { _ as __nuxt_component_1 } from './client-only-Db1Q_2tj.mjs';
import { ContentLoader } from 'vue-content-loader';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import __nuxt_component_1$1 from './Icon-H3opb0lx.mjs';
import { u as useAsyncData, q as queryContent } from './query-DiXo6x2D.mjs';
import { u as useHead } from './server.mjs';
import { u as useSiteConfig } from './useSiteConfig-B534vZKW.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-BeKxkWR8.mjs';
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto mb-5" }, _attrs))}><div class="grid grid-cols-1 items-center"><div class="px-6"><h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5">${ssrInterpolate(unref(blogsPage).title)}</h1><p class="dark:text-zinc-300">${ssrInterpolate(unref(blogsPage).description)}</p></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/archive/hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  components: { ContentLoader }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContentLoader = resolveComponent("ContentLoader");
  _push(ssrRenderComponent(_component_ContentLoader, mergeProps({
    viewBox: "0 0 400 160",
    speed: 2,
    "primary-color": "#c9c9c9",
    "secondary-color": "#ecebeb"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<rect x="10" y="13" rx="0" ry="0" width="95" height="86"${_scopeId}></rect><rect x="119" y="19" rx="0" ry="0" width="219" height="16"${_scopeId}></rect><rect x="119" y="49" rx="0" ry="0" width="277" height="16"${_scopeId}></rect><rect x="119" y="82" rx="0" ry="0" width="56" height="14"${_scopeId}></rect><rect x="195" y="82" rx="0" ry="0" width="56" height="14"${_scopeId}></rect><rect x="272" y="82" rx="0" ry="0" width="56" height="14"${_scopeId}></rect>`);
      } else {
        return [
          createVNode("rect", {
            x: "10",
            y: "13",
            rx: "0",
            ry: "0",
            width: "95",
            height: "86"
          }),
          createVNode("rect", {
            x: "119",
            y: "19",
            rx: "0",
            ry: "0",
            width: "219",
            height: "16"
          }),
          createVNode("rect", {
            x: "119",
            y: "49",
            rx: "0",
            ry: "0",
            width: "277",
            height: "16"
          }),
          createVNode("rect", {
            x: "119",
            y: "82",
            rx: "0",
            ry: "0",
            width: "56",
            height: "14"
          }),
          createVNode("rect", {
            x: "195",
            y: "82",
            rx: "0",
            ry: "0",
            width: "56",
            height: "14"
          }),
          createVNode("rect", {
            x: "272",
            y: "82",
            rx: "0",
            ry: "0",
            width: "56",
            height: "14"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/Loader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("home", () => queryContent("/blogs").sort({ _id: -1 }).find())), __temp = await __temp, __restore(), __temp);
    const elementPerPage = ref(5);
    const pageNumber = ref(1);
    const searchTest = ref("");
    const formattedData = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.map((articles) => {
        return {
          path: articles._path,
          title: articles.title || "no-title available",
          description: articles.description || "no-description available",
          image: articles.image || "/not-found.jpg",
          alt: articles.alt || "no alter data available",
          ogImage: articles.ogImage || "/not-found.jpg",
          date: articles.date || "not-date-available",
          tags: articles.tags || [],
          published: articles.published || false
        };
      })) || [];
    });
    const searchData = computed(() => {
      return formattedData.value.filter((data2) => {
        const lowerTitle = data2.title.toLocaleLowerCase();
        if (lowerTitle.search(searchTest.value) !== -1)
          return true;
        else
          return false;
      }) || [];
    });
    computed(() => {
      return searchData.value.filter((data2, idx) => {
        const startInd = (pageNumber.value - 1) * elementPerPage.value;
        const endInd = pageNumber.value * elementPerPage.value - 1;
        if (idx >= startInd && idx <= endInd)
          return true;
        else
          return false;
      }) || [];
    });
    const totalPage = computed(() => {
      const ttlContent = searchData.value.length || 0;
      const totalPage2 = Math.ceil(ttlContent / elementPerPage.value);
      return totalPage2;
    });
    useHead({
      title: "Archive",
      meta: [
        {
          name: "description",
          content: "Here you will find all the blog posts I have written & published on this site."
        }
      ]
    });
    useSiteConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArchiveHero = _sfc_main$2;
      const _component_ClientOnly = __nuxt_component_1;
      const _component_BlogLoader = __nuxt_component_2;
      const _component_Icon = __nuxt_component_1$1;
      resolveDirective("auto-animate");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container max-w-5xl mx-auto text-zinc-600" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ArchiveHero, null, null, _parent));
      _push(`<div class="px-6"><input${ssrRenderAttr("value", unref(searchTest))} placeholder="Search" type="text" class="block w-full bg-[#F1F2F4] dark:bg-slate-900 dark:placeholder-zinc-500 text-zinc-300 rounded-md border-gray-300 dark:border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BlogLoader, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BlogLoader, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BlogLoader),
              createVNode(_component_BlogLoader)
            ];
          }
        })
      }, _parent));
      _push(`<div class="flex justify-center items-center space-x-6"><button${ssrIncludeBooleanAttr(unref(pageNumber) <= 1) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:code-less-than",
        size: "30",
        class: { "text-sky-700 dark:text-sky-400": unref(pageNumber) > 1 }
      }, null, _parent));
      _push(`</button><p>${ssrInterpolate(unref(pageNumber))} / ${ssrInterpolate(unref(totalPage))}</p><button${ssrIncludeBooleanAttr(unref(pageNumber) >= unref(totalPage)) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:code-greater-than",
        size: "30",
        class: { "text-sky-700 dark:text-sky-400": unref(pageNumber) < unref(totalPage) }
      }, null, _parent));
      _push(`</button></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BNqtTPqC.mjs.map
