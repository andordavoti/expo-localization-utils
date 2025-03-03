package expo.modules.localizationutils

import android.content.Intent
import android.net.Uri
import android.os.Build
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.provider.Settings
import androidx.annotation.RequiresApi
import expo.modules.kotlin.exception.Exceptions

class ExpoLocalizationUtilsModule : Module() {
    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    @RequiresApi(Build.VERSION_CODES.TIRAMISU)
    override fun definition() = ModuleDefinition {
        // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
        // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
        // The module will be accessible from `requireNativeModule('ExpoLocalizationUtils')` in JavaScript.
        Name("ExpoLocalizationUtils")

        // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
        Function("openNativeAppLanguageSettings") {
            val context = appContext.reactContext ?: throw Exceptions.AppContextLost()

            val intent = Intent(Settings.ACTION_APP_LOCALE_SETTINGS)
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            intent.addFlags(Intent.FLAG_ACTIVITY_NO_HISTORY)
            intent.data = Uri.parse("package:" + context.packageName)
            intent.putExtra(Settings.EXTRA_APP_PACKAGE, context.packageName)
            if (intent.resolveActivity(context.packageManager) != null) {
                context.startActivity(intent)
            }
        }
    }
}
