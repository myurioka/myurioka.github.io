import { useSSRContext, defineComponent, computed, withAsyncContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { m as makeFirstCharUpper } from './helper-Dwzg6WEl.mjs';
import { a as useRoute, u as useHead } from './server.mjs';
import { _ as _sfc_main$2, a as __nuxt_component_1 } from './empty-BIQDkHEh.mjs';
import { u as useAsyncData, q as queryContent } from './query-DiXo6x2D.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './nuxt-link-BdWVzNlo.mjs';
import './NuxtImg-BJKQrgvQ.mjs';
import './tag-BXt0q8Nz.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './preview-DaooDkFR.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "topic",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const category = computed(() => {
      const name = route.params.category || "";
      let strName = "";
      if (Array.isArray(name))
        strName = name.at(0) || "";
      else
        strName = name;
      return makeFirstCharUpper(strName);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}><div class="p-6 my-4 mx-2 rounded-md bg-gray-200 dark:bg-slate-900"><h1 class="text-black dark:text-white font-semibold leading-tight text-xl md:text-2xl"> #${ssrInterpolate(unref(category))}</h1></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/category/topic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[category]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const category = computed(() => {
      const name = route.params.category || "";
      let strName = "";
      if (Array.isArray(name))
        strName = name.at(0) || "";
      else
        strName = name;
      return strName;
    });
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `category-data-${category.value}`,
      () => queryContent("/blogs").where({ tags: { $contains: category.value } }).find()
    )), __temp = await __temp, __restore(), __temp);
    const formattedData = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.map((articles) => {
        return {
          path: articles._path || "",
          title: articles.title || "no-title available",
          description: articles.description || "no-description available",
          image: articles.image || "/blogs-img/blog.jpg",
          alt: articles.alt || "no alter data available",
          ogImage: articles.ogImage || "/blogs-img/blog.jpg",
          date: articles.date || "not-date-available",
          tags: articles.tags || [],
          published: articles.published || false
        };
      });
    });
    useHead({
      title: category.value,
      meta: [
        {
          name: "description",
          content: `You will find all the ${category.value} related post here`
        }
      ]
    });
    useSiteConfig();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_CategoryTopic = _sfc_main$1;
      const _component_BlogCard = _sfc_main$2;
      const _component_BlogEmpty = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container max-w-5xl mx-auto text-zinc-600 px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CategoryTopic, null, null, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(formattedData), (post) => {
        _push(ssrRenderComponent(_component_BlogCard, {
          key: post.title,
          path: post.path,
          title: post.title,
          date: post.date,
          description: post.description,
          image: post.image,
          alt: post.alt,
          "og-image": post.ogImage,
          tags: post.tags,
          published: post.published
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (((_a = unref(data)) == null ? void 0 : _a.length) === 0) {
        _push(ssrRenderComponent(_component_BlogEmpty, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/[category].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_category_-I0xQVn1H.mjs.map
