import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoLocalizationUtilsViewProps } from './ExpoLocalizationUtils.types';

const NativeView: React.ComponentType<ExpoLocalizationUtilsViewProps> =
  requireNativeView('ExpoLocalizationUtils');

export default function ExpoLocalizationUtilsView(props: ExpoLocalizationUtilsViewProps) {
  return <NativeView {...props} />;
}
