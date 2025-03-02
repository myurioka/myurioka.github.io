import { E as klona, P as defuFn } from '../runtime.mjs';
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
const iconCollections = ["fluent-emoji-high-contrast", "material-symbols-light", "cryptocurrency-color", "icon-park-outline", "icon-park-twotone", "fluent-emoji-flat", "emojione-monotone", "streamline-emojis", "heroicons-outline", "simple-line-icons", "material-symbols", "flat-color-icons", "icon-park-solid", "pepicons-pencil", "heroicons-solid", "pepicons-print", "cryptocurrency", "pixelarticons", "system-uicons", "bitcoin-icons", "entypo-social", "token-branded", "devicon-plain", "grommet-icons", "fluent-color", "pepicons-pop", "svg-spinners", "fluent-emoji", "simple-icons", "circle-flags", "vscode-icons", "medical-icon", "icomoon-free", "majesticons", "radix-icons", "humbleicons", "fa6-regular", "rivet-icons", "emojione-v1", "skill-icons", "academicons", "healthicons", "fluent-mdl2", "lucide-lab", "teenyicons", "ant-design", "gravity-ui", "akar-icons", "lets-icons", "streamline", "fa6-brands", "file-icons", "catppuccin", "game-icons", "foundation", "fa-regular", "mono-icons", "hugeicons", "iconamoon", "zondicons", "mdi-light", "eos-icons", "gridicons", "duo-icons", "icon-park", "heroicons", "fa6-solid", "meteocons", "arcticons", "dashicons", "fa-brands", "websymbol", "fontelico", "mingcute", "flowbite", "proicons", "marketeq", "bytesize", "guidance", "openmoji", "emojione", "nonicons", "brandico", "flagpack", "fa-solid", "fontisto", "si-glyph", "pepicons", "iconoir", "tdesign", "clarity", "octicon", "pajamas", "formkit", "line-md", "twemoji", "noto-v1", "fxemoji", "codicon", "devicon", "raphael", "flat-ui", "topcoat", "feather", "tabler", "carbon", "lucide", "lsicon", "memory", "mynaui", "circum", "fluent", "nimbus", "entypo", "icons8", "subway", "vaadin", "solar", "basil", "typcn", "charm", "prime", "cuida", "quill", "logos", "token", "covid", "maki", "weui", "gala", "mage", "ooui", "noto", "flag", "unjs", "iwwa", "zmdi", "bpmn", "mdi", "ion", "uil", "bxs", "cil", "uiw", "uim", "uit", "uis", "jam", "oui", "bxl", "cib", "cbi", "cif", "gis", "map", "geo", "fad", "eva", "wpf", "whh", "ic", "ph", "ri", "bi", "bx", "gg", "ci", "ep", "fe", "mi", "f7", "ei", "wi", "la", "fa", "oi", "et", "el", "ls", "vs", "il", "ps"];
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
//# sourceMappingURL=index-X4Jd8Z8k.mjs.map
