import { registerWebModule, NativeModule } from 'expo';

import { ExpoLocalizationUtilsModuleEvents } from './ExpoLocalizationUtils.types';

class ExpoLocalizationUtilsModule extends NativeModule<ExpoLocalizationUtilsModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoLocalizationUtilsModule);
