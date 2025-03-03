const {
  withPlugins,
  withDangerousMod,
  withAndroidManifest,
  AndroidConfig,
} = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

async function saveFileAsync(filePath, content) {
  return fs.promises.writeFile(filePath, content, "utf8");
}

async function ensureDirectoryExists(dirPath) {
  await fs.promises.mkdir(dirPath, { recursive: true });
}

const withAddLocalesConfigFile = (config, { locales }) => {
  return withDangerousMod(config, [
    "android",
    async (config) => {
      const filePath = path.join(
        config.modRequest.platformProjectRoot,
        "app/src/main/res/xml/locales_config.xml",
      );

      // Create the XML content for supported locales
      const localesXmlContent = `<?xml version="1.0" encoding="utf-8"?>\n<locale-config xmlns:android="http://schemas.android.com/apk/res/android">${locales?.map(
        (locale) => `\n<locale android:name="${locale}"/>`,
      )}\n</locale-config>`;

      // Ensure the xml directory exists
      const xmlDir = path.dirname(filePath);
      await ensureDirectoryExists(xmlDir);

      await saveFileAsync(filePath, localesXmlContent);
      return config;
    },
  ]);
};

const withLinkLocalesConfig = (c) => {
  return withAndroidManifest(c, async (config) => {
    const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(
      config.modResults,
    );
    mainApplication.$["android:localeConfig"] = "@xml/locales_config";
    return config;
  });
};

module.exports = (config, options) =>
  withPlugins(config, [
    (config) => withAddLocalesConfigFile(config, options),
    withLinkLocalesConfig,
  ]);
