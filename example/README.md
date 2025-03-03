# Localization Example

This is an example Expo project that demonstrates how to use the library. As well as providing a proposal for how to structure your project to support localization with Expo Localization with i18next.

The example app supports the Norwegian and English language.

expo-localization is used to detect the user's locale and select the best available translation for the current locale.

i18next is used to manage the translations.

expo-localization-utils is used to open the native app language settings for the app, and configure the supported locales for the app.

## Run the example

To run the example, you need to install the dependencies:

```sh
npm install
```

Prebuild:

```sh
npx expo prebuild --clean
```

Run the app:

```sh
npx expo run:ios
```

or

```sh
npx expo run:android
```

## Structure

The translation files are located in the `locales` directory and split into the `no` and `en` directories for Norwegian and English.

Each language's translation files are split into multiple namespaces to make it easier to manage the translations.

The namespaces are defined in the `i18n.ts` file, the default namespace is `common`.

## Adding new content

To add new content to the app, you need to add the content to the translation files in either the existing namespaces or create a new namespace.

### Creating a new namespace

To create a new namespace, you need to add the namespace to the `i18n.ts` file.

Then you need to create a new translation files in the `locales` directory for the new namespace in each language.

## Generating types

To generate types for the translations, you need to run the `generate-types` script.

This needs to be done after changing the translations to update the types.

```sh
npm run localization:types
```

## Using translations

To use translations in the app, you need to use the `useTranslation` hook from `react-i18next`.

The `useTranslation` hook returns a `t` function that you can use to get the translation for a key.

You can either pass in the namespace in the `useTranslation` hook:

```tsx
import { useTranslation } from "react-i18next";

const { t } = useTranslation("feed");

t("hello_world");
```

Or can either pass in the namespace in the `t` function:

```tsx
import { useTranslation } from "react-i18next";

const { t } = useTranslation();

t("title", { ns: "feed" });
```

## Interpolation

To interpolate values into the translations, you can use the `t` function with the `interpolation` object.

```tsx
import { useTranslation } from "react-i18next";

const { t } = useTranslation();

t("greeting", { ns: "feed", name: "Trine" });
```

```json
{
  "greeting": "Hello, {{name}}!"
}
```

## Plurals

To use plurals in the translations, you can use the `t` function with the `count` object.

```tsx
import { useTranslation } from "react-i18next";

const { t } = useTranslation();

t("subscription", { ns: "profile", count: 1 }); // subscription

t("subscription", { ns: "profile", count: 2 }); // subscriptions

t("subscriptionWithCount", { ns: "profile", count: 1 }); // 1 subscription

t("subscriptionWithCount", { ns: "profile", count: 2 }); // 2 subscriptions
```

```json
{
  "subscription_one": "subscription",
  "subscription_other": "subscriptions",
  "subscriptionWithCount_one": "{{count}} subscription",
  "subscriptionWithCount_other": "{{count}} subscriptions"
}
```

## Trans Component

To use translations in JSX, you can use the `Trans` component from `react-i18next`.

```tsx
import { Trans, useTranslation } from "react-i18next";

return (
  <Text style={styles.body}>
    <Trans i18nKey="formattedDemo" ns="common">
      Test <Text style={{ fontWeight: "bold" }}>formatted</Text> translation
    </Trans>
  </Text>
);
```

```json
{
  "formattedDemo": "Demo of <0>formatted</0> translation"
}
```
