import { o as defu } from '../runtime.mjs';
import { b as useRequestEvent } from './server.mjs';

function useSiteConfig(options) {
  let stack;
  stack = useRequestEvent().context.siteConfig.get(defu({ resolveRefs: true }, options));
  return stack || {};
}

export { useSiteConfig as u };
//# sourceMappingURL=useSiteConfig-B534vZKW.mjs.map
