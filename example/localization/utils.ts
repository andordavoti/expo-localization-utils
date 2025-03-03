import * as Localization from "expo-localization";
import { useEffect } from "react";
import { Platform } from "react-native";

import i18n from "./i18n";

export const getCurrentLocale = (locales?: Localization.Locale[]) => {
  if (!locales) {
    locales = Localization.getLocales();
  }

  return locales[0].languageTag.startsWith("nb") ? "nb" : "en";
};

export const useSelectedLanguage = () => {
  const locales = Localization.useLocales();

  useEffect(() => {
    // iOS already reloads the app when the language changes
    if (Platform.OS !== "ios") {
      const currentLocale = getCurrentLocale(locales);

      if (i18n.language !== currentLocale) {
        i18n.changeLanguage(currentLocale);
      }
    }
  }, [locales]);
};
