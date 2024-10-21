import { _ as _sfc_main$4 } from './NuxtImg-BJKQrgvQ.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3 } from './tag-BXt0q8Nz.mjs';
import { useSSRContext, defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import _sfc_main$3 from './ContentRenderer-oF9kOSRE.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BdWVzNlo.mjs';
import { a as useRoute, n as navigateTo, u as useHead } from './server.mjs';
import { u as useAsyncData, q as queryContent } from './query-DiXo6x2D.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './ContentRendererMarkdown-DGQlqgwI.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    title: { default: "no-title" },
    image: { default: "#" },
    alt: { default: "no-img" },
    description: { default: "no description" },
    date: { default: "no-date" },
    tags: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$4;
      const _component_LogoDate = __nuxt_component_2;
      const _component_LogoTag = __nuxt_component_3;
      _push(`<header${ssrRenderAttrs(_attrs)}><h1 class="text-xl dark:text-zinc-300 md:text-3xl lg:text-4xl m-7 font-bold text-center">${ssrInterpolate(_ctx.title || "")}</h1>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: _ctx.image || "",
        alt: _ctx.alt || "",
        width: "600",
        class: "m-auto rounded-2xl shadow-lg h-32 md:h-72 w-4/6 md:w-4/5 content-center object-cover"
      }, null, _parent));
      _push(`<p class="text-xs sm:text-sm my-3 max-w-xl mx-auto text-center text-zinc-600 dark:text-zinc-400">${ssrInterpolate(_ctx.description)}</p><div class="flex w-full justify-center text-xs md:text-base my-8"><div class="md:flex text-black dark:text-zinc-300 content-center gap-8 text-xs sm:text-sm"><div class="flex items-center font-semibold">`);
      _push(ssrRenderComponent(_component_LogoDate, null, null, _parent));
      _push(`<p>${ssrInterpolate(_ctx.date || "")}</p></div><div class="flex items-center gap-2 flex-wrap my-5">`);
      _push(ssrRenderComponent(_component_LogoTag, null, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(_ctx.tags, (tag) => {
        _push(`<span class="bg-gray-200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold">${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div></div></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Toc",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const { path } = useRoute();
    const articles = ([__temp, __restore] = withAsyncContext(() => queryContent(path).findOne()), __temp = await __temp, __restore(), __temp);
    const links = ((_b = (_a = articles == null ? void 0 : articles.body) == null ? void 0 : _a.toc) == null ? void 0 : _b.links) || [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:col-span-3 sticky top-28 h-96 hidden lg:block justify-self-end" }, _attrs))}><div class="border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900"><h1 class="text-sm font-bold mb-3 border-b dark:border-gray-800 pb-2"> Table Of Content </h1><!--[-->`);
      ssrRenderList(unref(links), (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.id,
          to: `#${link.id}`,
          class: "block text-xs mb-3 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/Toc.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[blog]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path } = useRoute();
    const { data: articles, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`blog-post-${path}`, () => queryContent(path).findOne())), __temp = await __temp, __restore(), __temp);
    if (error.value)
      navigateTo("/404");
    const data = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return {
        title: ((_a = articles.value) == null ? void 0 : _a.title) || "no-title available",
        description: ((_b = articles.value) == null ? void 0 : _b.description) || "no-description available",
        image: ((_c = articles.value) == null ? void 0 : _c.image) || "/not-found.jpg",
        alt: ((_d = articles.value) == null ? void 0 : _d.alt) || "no alter data available",
        ogImage: ((_e = articles.value) == null ? void 0 : _e.ogImage) || "/not-found.jpg",
        date: ((_f = articles.value) == null ? void 0 : _f.date) || "not-date-available",
        tags: ((_g = articles.value) == null ? void 0 : _g.tags) || [],
        published: ((_h = articles.value) == null ? void 0 : _h.published) || false
      };
    });
    useHead({
      title: data.value.title || ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogHeader = _sfc_main$2;
      const _component_ContentRenderer = _sfc_main$3;
      const _component_BlogToc = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12" }, _attrs))}><div class="col-span-12 lg:col-span-9">`);
      _push(ssrRenderComponent(_component_BlogHeader, {
        title: unref(data).title,
        image: unref(data).image,
        alt: unref(data).alt,
        date: unref(data).date,
        description: unref(data).description,
        tags: unref(data).tags
      }, null, _parent));
      _push(`<div class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg">`);
      if (unref(articles)) {
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(articles) }, {
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>No content found.</p>`);
            } else {
              return [
                createVNode("p", null, "No content found.")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_BlogToc, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/[blog].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_blog_-kN5N5wfM.mjs.map
