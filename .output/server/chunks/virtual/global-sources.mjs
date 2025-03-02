const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "@nuxt/content:urls",
            "description": "Generated from your markdown files.",
            "tips": [
                "Enabled because you've set `config.strictNuxtContentPaths: true`."
            ]
        },
        "fetch": "/__sitemap__/nuxt-content-urls.json",
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/about"
            },
            {
                "loc": "/blogs"
            },
            {
                "loc": "/categories"
            },
            {
                "loc": "/"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            "/",
            {
                "loc": "/"
            },
            {
                "loc": "/about"
            },
            {
                "loc": "/blogs/demo02"
            },
            {
                "loc": "/blogs/demo01"
            },
            {
                "loc": "/blogs/maze"
            },
            {
                "loc": "/blogs/knight"
            },
            {
                "loc": "/categories"
            },
            {
                "loc": "/blogs"
            },
            {
                "loc": "/categories/rust"
            },
            {
                "loc": "/categories/webassembly"
            },
            {
                "loc": "/categories/wasm"
            },
            {
                "loc": "/blogs/cart"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
