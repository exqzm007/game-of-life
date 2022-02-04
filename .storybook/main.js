const webpackConfig = require('../webpack.config');
const cfg = webpackConfig();
const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react",
  webpackFinal: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: { ...config.resolve.alias, ...cfg.resolve.alias },
    }
    const cssRule = config.module.rules.find(rule => {
      return rule.test.toString() === '/\\.css$/'
    })
    cssRule.use[1].options.modules = true;

    return config;
  },
}