const tsconfigPaths = require('vite-tsconfig-paths').default;

module.exports = {
  staticDirs: ['../public'],
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    config.plugins = [...config.plugins, tsconfigPaths()];
    return config;
  },
};
