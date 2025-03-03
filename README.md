# @davotisolutions/expo-localization-utils

@davotisolutions/expo-localization-utils is a set of utilities for working with localization in Expo projects. It provides a set of methods to interact with the native localization settings of the device, such as opening the native app language settings screen on Android and adding supported locales to the Android native project with the config plugin.

## Installation

### Managed Expo projects

For [managed](https://docs.expo.dev/archive/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](#api-documentation). If you follow the link and there is no documentation available, then this library is not yet usable within managed projects &mdash; it is likely to be included in an upcoming Expo SDK release.

### Bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

#### Add the package to your npm dependencies

```sh
npm install @davotisolutions/expo-localization-utils
```

#### Expo Prebuild

```sh
npx expo prebuild --clean
```

## Open app localization settings

Import the module and use it in your project:

```typescript
import ExpoLocalizationUtils from "@davotisolutions/expo-localization-utils";

// Example usage
ExpoLocalizationUtils.openNativeAppLanguageSettings();
```

On Android, this will open the native app language settings screen for your app.

On iOS, it will open the native settings for your app, as there is no way to open the language settings directly for an app.

## Add supported locales

### Android

In the app.json or app.config.js file, add the supported locales to the plugin:

```json
{
  "expo": {
    ... // other configuration
    "plugins": [
      [
        "@davotisolutions/expo-localization-utils",
        {
          "locales": ["en", "nb"]
        }
      ]
    ]
  }
}
```

The `locales` array should contain the locales that the app supports. The locales should be in the format of https://developer.android.com/guide/topics/resources/app-languages#sample-config

### iOS

This library isn't needed for adding supported locales to iOS projects, as this can added directly to the expo.ios.infoPlist in the app.json or app.config.js file:

```json
{
  "expo": {
    ... // other configuration
    "ios": {
      ... // other configuration
      "infoPlist": {
        "CFBundleLocalizations": ["no", "en"]
      }
    },
  }
}
```

## Example

There is an example project in the `example` directory, which is a Expo project that demonstrates how to use the library. As well as providing a proposal for how to structure your project to support localization with Expo Localization with i18next.

You can read more about the example project in the [README](example/README.md).

## Contributing

Contributions are very welcome! Submit a pull request on the GitHub repository to propose changes.

## License

MIT
