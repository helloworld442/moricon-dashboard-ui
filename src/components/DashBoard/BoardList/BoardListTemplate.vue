<template>
  <section class="board-list-template">
    <slot />
    <RouterLink class="list-template-link" to="/dashboard"
      ><ArrowRight
    /></RouterLink>
  </section>
</template>

<script setup>
import ArrowRight from "../../../assets/icons/ArrowRight";
</script>

<style lang="scss">
@import "../../../assets/styles/main.scss";

.board-list-template {
  position: relative;
  flex: 1 0 380px;
  height: 100%;

  padding-top: 96px;
  box-sizing: border-box;

  border-right: 1px solid $border-color-0;
  background-color: #fff;
}

.list-template-link {
  position: absolute;
  top: 50%;
  right: -34px;
  transform: translateY(-50%);
  z-index: 1;

  border: 1px solid $border-color-0;
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  background-color: #fff;

  svg {
    width: 24px;
    height: 54px;

    padding: 4px;

    stroke-width: 2;

    transform: rotate(-180deg);
  }
}
</style>
