import * as React from 'react';

import { ExpoLocalizationUtilsViewProps } from './ExpoLocalizationUtils.types';

export default function ExpoLocalizationUtilsView(props: ExpoLocalizationUtilsViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
