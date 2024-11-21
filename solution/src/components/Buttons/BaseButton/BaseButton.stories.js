import BaseButton from "./BaseButton.vue";

export default {
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onClick: { action: "clicked" },
    type: {
      options: ['theme', 'inverted', 'danger'],
      control: 'select',
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: 'select',
    }
  },
  component: BaseButton,
  title: 'Componets/Buttons/BaseButton',
  tags: ['autodocs'],
};

export const Theme = {
  args: {
    disabled: false,
    label: "Theme",
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args" @click="args.onClick" />'
  })
};

export const Inverted = {
  args: {
    ...Theme.args,
    label: 'Inverted',
    type: 'inverted',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<div style="background-color: #066542; padding: 20px 0"><BaseButton v-bind="args" @click="args.onClick" /></div>'
  })
};

export const Danger = {
  ...Theme,
  args: {
    ...Theme.args,
    label: 'Danger',
    type: 'danger',
  }
}
