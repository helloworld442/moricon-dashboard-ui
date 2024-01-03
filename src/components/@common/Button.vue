<template>
  <button :data-theme="theme" :disabled="disabled" class="button">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    theme: String,
    disabled: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.button {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  &[data-theme="large"] {
    width: 250px;
    height: 64px;
    border: 1px solid $main-color-light;
    border-radius: 4px;
    line-height: 64px;
    font-size: 1.05rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: $main-color-light;
    fill: $main-color-light;
    background: #fff;
  }

  &[data-theme="medium"] {
    height: 46px;
    padding: 12px 14px;
    margin: 12px 0;
    box-sizing: border-box;
    border: none;
    border-radius: 2px;
    display: flex;
    align-items: center;
    font-family: "Noto Sans KR";
    font-size: 0.9rem;
    font-weight: 500;
    color: #fff;
    fill: #fff;
    background: $main-color-dark;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    svg {
      margin-right: 12px;
      width: 0.95rem;
      height: 0.95rem;
    }
  }

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    color: $font-color-4;
    fill: $font-color-4;
    border: 1px solid $border-color-1;
    background: $background-color-2;
    cursor: not-allowed;
  }
}
</style>
