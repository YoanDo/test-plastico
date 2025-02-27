module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport/register"
  ],
  extends: [
    'plugin:@next/next/recommended',
  ],
};
