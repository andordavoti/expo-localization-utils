import { NativeModule, requireNativeModule } from "expo";
import { Linking, Platform } from "react-native";

declare class ExpoLocalizationUtilsModule extends NativeModule {
  openNativeAppLanguageSettings(): void;
}

const ExpoLocalizationUtils = requireNativeModule<ExpoLocalizationUtilsModule>(
  "ExpoLocalizationUtils",
);

if (Platform.OS === "ios") {
  ExpoLocalizationUtils.openNativeAppLanguageSettings = () => {
    Linking.openSettings();
  };
}

// This call loads the native module object from the JSI.
export default ExpoLocalizationUtils;
