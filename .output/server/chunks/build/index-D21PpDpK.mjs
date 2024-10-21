import { useSSRContext, defineComponent, mergeProps, unref, withAsyncContext, computed, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { h as homePage } from './index-iPWIXRkA.mjs';
import __nuxt_component_1 from './Icon-MaE-4ymI.mjs';
import { _ as _sfc_main$2$1, a as __nuxt_component_1$1, b as __nuxt_component_4 } from './empty-BIQDkHEh.mjs';
import { u as useAsyncData, q as queryContent } from './query-DiXo6x2D.mjs';
import { u as useHead } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BdWVzNlo.mjs';
import { _ as _sfc_main$5 } from './NuxtImg-BJKQrgvQ.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3 } from './tag-BXt0q8Nz.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-X4Jd8Z8k.mjs';
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
import './preview-DaooDkFR.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}><div class="grid grid-cols-1 items-center"><div class="px-6 mb-10"><h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5">${ssrInterpolate(unref(homePage).title)}</h1><p class="dark:text-zinc-300">${ssrInterpolate(unref(homePage).description)}</p></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/hero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "recent",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "recent-post",
      () => queryContent("/blogs").limit(3).sort({ _id: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const formattedData = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.map((articles) => {
        return {
          path: articles._path || "",
          title: articles.title || "no-title available",
          description: articles.description || "no-description available",
          image: articles.image || "/not-found.jpg",
          alt: articles.alt || "no alter data available",
          ogImage: articles.ogImage || "/not-found.jpg",
          date: articles.date || "not-date-available",
          tags: articles.tags || [],
          published: articles.published || false
        };
      });
    });
    useHead({
      title: "Home",
      meta: [
        {
          name: "description",
          content: "Welcome To My Blog. Programming Retro Game in Rust & WebAssembly."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_1;
      const _component_BlogCard = _sfc_main$2$1;
      const _component_BlogEmpty = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-10 px-4" }, _attrs))}><div class="flex flex-row items-center space-x-3 pt-5 pb-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:simple-icons:retroarch",
        size: "2em",
        class: "text-black dark:text-zinc-300"
      }, null, _parent));
      _push(`<h2 class="text-4xl font-semibold text-black dark:text-zinc-300"> Recent Post </h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(formattedData), (post) => {
        _push(ssrRenderComponent(_component_BlogCard, {
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/recent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "card",
  __ssrInlineRender: true,
  props: {
    path: { default: "/" },
    title: { default: "no-title" },
    date: { default: "no-date" },
    description: { default: "no-description" },
    image: { default: "/blogs-img/blog.jpg" },
    alt: { default: "no-alt" },
    ogImage: { default: "/blogs-img/blog.jpg" },
    tags: { default: () => [] },
    published: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$5;
      const _component_LogoDate = __nuxt_component_2;
      const _component_LogoTag = __nuxt_component_3;
      const _component_LogoArrow = __nuxt_component_4;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.path,
        class: "grid grid-cols-1 sm:grid-cols-10 gap-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:col-span-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500",
              width: "300",
              src: _ctx.image,
              alt: _ctx.alt
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="sm:col-span-7 p-5"${_scopeId}><h2 class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"${_scopeId}>${ssrInterpolate(_ctx.title)}</h2><p class="text-ellipsis line-clamp-2"${_scopeId}>${ssrInterpolate(_ctx.description)}</p><div class="text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6"${_scopeId}><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LogoDate, null, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.date)}</p></div><div class="flex items-center gap-1 flex-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LogoTag, null, null, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.tags, (tag) => {
              _push2(`<p${_scopeId}>${ssrInterpolate(tag)}</p>`);
            });
            _push2(`<!--]--></div></div><div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2"${_scopeId}><p${_scopeId}>Read More</p>`);
            _push2(ssrRenderComponent(_component_LogoArrow, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:col-span-3" }, [
                createVNode(_component_NuxtImg, {
                  class: "h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500",
                  width: "300",
                  src: _ctx.image,
                  alt: _ctx.alt
                }, null, 8, ["src", "alt"])
              ]),
              createVNode("div", { class: "sm:col-span-7 p-5" }, [
                createVNode("h2", { class: "text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400" }, toDisplayString(_ctx.title), 1),
                createVNode("p", { class: "text-ellipsis line-clamp-2" }, toDisplayString(_ctx.description), 1),
                createVNode("div", { class: "text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_LogoDate),
                    createVNode("p", null, toDisplayString(_ctx.date), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-1 flex-wrap" }, [
                    createVNode(_component_LogoTag),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tags, (tag) => {
                      return openBlock(), createBlock("p", { key: tag }, toDisplayString(tag), 1);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2" }, [
                  createVNode("p", null, "Read More"),
                  createVNode(_component_LogoArrow)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/archive/card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "trending",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "trending-post",
      () => queryContent("/blogs").limit(3).sort({ _id: 1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const formattedData = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.map((articles) => {
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
      });
    });
    useHead({
      title: "Home",
      meta: [
        {
          name: "description",
          content: "Welcome To My Blog Site. Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ArchiveCard = _sfc_main$2;
      const _component_BlogEmpty = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4" }, _attrs))}><div class="grid grid-cols-1"><!--[-->`);
      ssrRenderList(unref(formattedData), (post) => {
        _push(ssrRenderComponent(_component_ArchiveCard, {
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/trending.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home",
      meta: [
        {
          name: "description",
          content: "Welcome To My Blog. Programming Retro Game in Rust & WebAssembly."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainHero = _sfc_main$4;
      const _component_MainRecent = _sfc_main$3;
      const _component_MainTrending = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container max-w-5xl mx-auto text-zinc-600" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MainHero, null, null, _parent));
      _push(ssrRenderComponent(_component_MainRecent, null, null, _parent));
      _push(ssrRenderComponent(_component_MainTrending, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D21PpDpK.mjs.map
