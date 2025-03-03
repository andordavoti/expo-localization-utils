import { NativeModule, requireNativeModule } from "expo";

declare class ExpoLocalizationUtilsModule extends NativeModule {
  openNativeAppLanguageSettings(): void;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoLocalizationUtilsModule>(
  "ExpoLocalizationUtils"
);
