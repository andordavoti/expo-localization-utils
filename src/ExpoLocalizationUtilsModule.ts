import { NativeModule, requireNativeModule } from 'expo';

import { ExpoLocalizationUtilsModuleEvents } from './ExpoLocalizationUtils.types';

declare class ExpoLocalizationUtilsModule extends NativeModule<ExpoLocalizationUtilsModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoLocalizationUtilsModule>('ExpoLocalizationUtils');
