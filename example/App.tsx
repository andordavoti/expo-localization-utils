import ExpoLocalizationUtils from "expo-localization-utils";
import { useTranslation } from "react-i18next";
import { Button, Text, View } from "react-native";

import { useSelectedLanguage } from "./localization/utils";
import "./localization/i18n";

export default function App() {
  useSelectedLanguage();
  const { t } = useTranslation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          marginBottom: 16,
        }}
      >
        {t("title", { ns: "home" })}
      </Text>
      <Button
        title={t("changeLanguage", { ns: "common" })}
        onPress={() => {
          ExpoLocalizationUtils.openNativeAppLanguageSettings();
        }}
      />
    </View>
  );
}
