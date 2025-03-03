import { registerWebModule, NativeModule } from "expo";

class ExpoLocalizationUtilsModule extends NativeModule {
  openNativeAppLanguageSettings() {
    // TODO: Implement this method
  }
}

export default registerWebModule(ExpoLocalizationUtilsModule);
