import type NoResources from "./resources-nb.d.ts";
import type EnResources from "./resources-en.d.ts";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: NoResources | EnResources;
  }
}
