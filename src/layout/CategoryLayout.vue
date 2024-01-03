<template>
  <div class="category-layout">
    <CategoryHeader />
    <slot />
  </div>
</template>

<script setup>
import CategoryHeader from "../components/Header/CategoryHeader";
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.category-layout {
  position: relative;
  left: 50%;
  max-width: 1078px;
  height: auto;
  transform: translateX(-50%);

  @include tablet {
    width: 100%;
    padding: 0 10vw;
    box-sizing: border-box;
  }
}
</style>
