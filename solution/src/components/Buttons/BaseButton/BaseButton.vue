<template>
  <button class="base-button" :class="type + ' ' + variant" :disabled="disabled">{{ label }}</button>
</template>

<script>

/**
 * Insert here a really nice description of the component
 *
 *
 */
export default {
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: "Label",
    },
    type: {
      type: String,
      default: "theme"
    },
    variant: {
      type: String,
      default: "primary"
    }
  }
}
</script>

<style lang="postcss" scoped>
  .base-button {
    border: 1px solid #066542;
    background-color: #066542;
    color: #ffffff;
    width: 91px;
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
  }

  .base-button:hover {
    cursor: pointer;
  }

  .base-button:disabled {
    cursor: auto;
  }

  .base-button:focus {
    outline: 1px solid #0A8BFF;
    outline-offset: 1px;
  }

  .theme.primary {
    background-color: #066542;
    color: #ffffff;
  }

  .theme.primary:hover {
    background-color: #055135;
    border-color: #055135;
  }

  .theme.primary:active {
    background-color: #043D28;
    border-color: #043D28;
  }

  .theme.primary:disabled {
    background-color: #83B2A0;
    border-color: #83B2A0;
  }

  .theme.secondary, .theme.tertiary, .inverted.primary {
    background-color: #ffffff;
    color: #066542;
  }

  .theme.secondary:disabled, .theme.tertiary:disabled {
    color: #83B2A0;
    border-color: #83B2A0;
    background-color: #ffffff;
  }

  .inverted.primary:hover {
    background-color: #9BC1B3;
  }

  .inverted.primary:active {
    background-color: #51937B;
  }

  .inverted.primary:disabled {
    background-color: #82B2A0;
  }

  .inverted.secondary {
    border-color: #ffffff;
  }

  .inverted.secondary:hover, .inverted.tertiary:hover {
    background-color: #1E7455;
  }

  .inverted.secondary:active, .inverted.tertiary:active {
    background-color: #50937A;
  }

  .inverted.secondary:disabled, .inverted.tertiary:disabled {
    background-color: #066542;
    border-color: #81B19F;
    color: #81B19F;
  }

  .inverted.tertiary:hover {
    border-color: #1E7455;
  }

  .inverted.tertiary:active {
    border-color: #50937A;
  }

  .inverted.tertiary:disabled {
    border-color: #066542;
  }

  .danger.primary {
    background-color: #A03324;
    border-color: #A03324;
  }

  .danger.primary:hover {
    background-color: #80291D;
    border-color: #80291D;
  }

  .danger.primary:active {
    background-color: #601F16;
    border-color: #601F16;
  }

  .danger.primary:disabled {
    background-color: #CF9991;
    border-color: #CF9991;
  }

  .danger.secondary, .danger.tertiary {
    color: #A03324;
    border-color: #A03324;
    background-color: #ffffff;
  }

  .danger.secondary:hover {
    color: #80291D;
    border-color: #80291D;
  }

  .danger.secondary:active {
    color: #601F16;
    border-color: #601F16;
  }

  .danger.secondary:disabled {
    color: #CF9991;
    border-color: #CF9991;
  }

  .theme.tertiary, .danger.tertiary {
    border-color: #ffffff;
  }

  .theme.secondary:hover, .theme.tertiary:hover, .danger.tertiary:hover {
    background-color: #EFF1F1;
  }

  .theme.secondary:active, .theme.tertiary:active, .danger.tertiary:active{
    background-color: #D1D4D6;
  }

  .danger.tertiary:disabled {
    color: #CF9991;
  }

</style>