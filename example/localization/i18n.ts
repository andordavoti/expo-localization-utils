import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import noCommon from "./locales/nb/common.json";
import nbHome from "./locales/nb/home.json";
import { getCurrentLocale } from "./utils";

i18n.use(initReactI18next).init({
  lng: getCurrentLocale(),
  fallbackLng: "nb",
  resources: {
    nb: {
      common: noCommon,
      home: nbHome,
    },
    en: {
      common: enCommon,
      home: enHome,
    },
  },
  interpolation: {
    escapeValue: false,
  },
  debug: __DEV__,
});

export default i18n;
