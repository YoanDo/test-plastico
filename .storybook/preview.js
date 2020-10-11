import { addParameters, addDecorator } from '@storybook/react'
import themeDecorator from './themeDecorator'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import customViewport from './customViewport'

addDecorator(themeDecorator);
addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewport,
    },
  },
});
