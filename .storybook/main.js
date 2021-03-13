const webpack = require('webpack');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    jsx: 'react'
  },
  webpackFinal: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react'
      })
    );

    return config;
  }
};
