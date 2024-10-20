import { F as klona, Q as defuFn } from '../runtime.mjs';
import { e as useNuxtApp } from './server.mjs';

const inlineConfig = {
  "nuxt": {}
};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
const iconCollections = ["fluent-emoji-high-contrast", "material-symbols-light", "cryptocurrency-color", "icon-park-outline", "icon-park-twotone", "fluent-emoji-flat", "emojione-monotone", "streamline-emojis", "heroicons-outline", "simple-line-icons", "material-symbols", "flat-color-icons", "icon-park-solid", "pepicons-pencil", "heroicons-solid", "pepicons-print", "cryptocurrency", "pixelarticons", "bitcoin-icons", "system-uicons", "devicon-plain", "entypo-social", "token-branded", "grommet-icons", "svg-spinners", "pepicons-pop", "fluent-color", "vscode-icons", "simple-icons", "fluent-emoji", "circle-flags", "medical-icon", "icomoon-free", "majesticons", "humbleicons", "rivet-icons", "radix-icons", "fa6-regular", "skill-icons", "emojione-v1", "academicons", "healthicons", "fluent-mdl2", "lucide-lab", "akar-icons", "lets-icons", "ant-design", "gravity-ui", "teenyicons", "streamline", "file-icons", "catppuccin", "fa6-brands", "game-icons", "foundation", "fa-regular", "mono-icons", "mdi-light", "hugeicons", "iconamoon", "eos-icons", "gridicons", "duo-icons", "lineicons", "zondicons", "heroicons", "fa6-solid", "icon-park", "arcticons", "meteocons", "dashicons", "fa-brands", "websymbol", "fontelico", "mingcute", "flowbite", "proicons", "guidance", "bytesize", "marketeq", "nonicons", "brandico", "openmoji", "emojione", "flagpack", "fa-solid", "fontisto", "si-glyph", "pepicons", "line-md", "iconoir", "tdesign", "formkit", "clarity", "octicon", "pajamas", "codicon", "devicon", "twemoji", "noto-v1", "fxemoji", "raphael", "flat-ui", "topcoat", "feather", "tabler", "mynaui", "lucide", "circum", "carbon", "lsicon", "nimbus", "fluent", "memory", "entypo", "icons8", "subway", "vaadin", "solar", "basil", "typcn", "prime", "cuida", "stash", "charm", "quill", "logos", "token", "covid", "weui", "mage", "gala", "maki", "ooui", "unjs", "noto", "flag", "iwwa", "zmdi", "bpmn", "mdi", "uil", "bxs", "uim", "uit", "uis", "jam", "ion", "cil", "uiw", "oui", "cib", "bxl", "cbi", "cif", "gis", "map", "geo", "fad", "eva", "wpf", "whh", "ic", "ri", "si", "bx", "gg", "ci", "fe", "mi", "ep", "bi", "ph", "ei", "f7", "wi", "la", "fa", "oi", "et", "el", "ls", "vs", "il", "ps"];
function resolveIconName(name = "") {
  let prefix;
  let provider = "";
  if (name[0] === "@" && name.includes(":")) {
    provider = name.split(":")[0].slice(1);
    name = name.split(":").slice(1).join(":");
  }
  if (name.startsWith("i-")) {
    name = name.replace(/^i-/, "");
    for (const collectionName of iconCollections) {
      if (name.startsWith(collectionName)) {
        prefix = collectionName;
        name = name.slice(collectionName.length + 1);
        break;
      }
    }
  } else if (name.includes(":")) {
    const [_prefix, _name] = name.split(":");
    prefix = _prefix;
    name = _name;
  }
  return {
    provider,
    prefix: prefix || "",
    name: name || ""
  };
}

export { resolveIconName as r, useAppConfig as u };
//# sourceMappingURL=index-BeKxkWR8.mjs.map
