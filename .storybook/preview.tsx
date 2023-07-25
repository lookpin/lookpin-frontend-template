import React, { ComponentType } from 'react';
import '../src/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Preview } from '@storybook/react';

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['common', 'shared', 'root'],
    },
  },
};

const decorators = [
  (Story: ComponentType) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
];

const preview: Preview = {
  parameters,
  decorators
}

export default preview;