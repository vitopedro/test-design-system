/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
}
export default config
