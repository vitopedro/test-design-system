<template>
  <button class="defaultButton" :disabled="disabled">{{ label }}</button>
</template>

<script>
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
  .defaultButton {
    border: none;
    background-color: #066542;
    color: #ffffff;
    width: 91px;
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
  }

  .defaultButton:hover {
    cursor: pointer;
    background-color: #055135;
  }

  .defaultButton:active {
    cursor: pointer;
    background-color: #043D28;
  }

  .defaultButton:focus {
    outline: 1px solid #0A8BFF;
    outline-offset: 1px;
  }

  .defaultButton:disabled {
    cursor: pointer;
    background-color: #83B2A0;
    border-color: #83B2A0;
  }
</style>