import React from 'react';
import type { WhyDidYouRenderOptions } from '@welldone-software/why-did-you-render';

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    const options: WhyDidYouRenderOptions = {
      trackAllPureComponents: true,
    };
    whyDidYouRender(React, options);
  }
}
