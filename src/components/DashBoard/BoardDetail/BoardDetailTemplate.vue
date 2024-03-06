<template>
  <section class="board-detail-template">
    <slot />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-detail-template {
  position: relative;
  flex: 1 0 365px;
  height: 100%;
  z-index: 2;

  padding: 24px;
  box-sizing: border-box;

  border-right: 1px solid $border-color-0;
  background-color: #fff;

  overflow-y: scroll;
}
</style>
