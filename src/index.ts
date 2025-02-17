// Reexport the native module. On web, it will be resolved to ExpoLocalizationUtilsModule.web.ts
// and on native platforms to ExpoLocalizationUtilsModule.ts
export { default } from './ExpoLocalizationUtilsModule';
export { default as ExpoLocalizationUtilsView } from './ExpoLocalizationUtilsView';
export * from  './ExpoLocalizationUtils.types';
