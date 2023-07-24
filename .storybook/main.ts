import tsconfigPaths from 'vite-tsconfig-paths';

module.exports = {
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],
  features: {
    storyStoreV7: true
  },
  async viteFinal(config) {
    config.plugins = [...config.plugins, tsconfigPaths()];
    return config;
  },
  docs: {
    autodocs: false
  }
};