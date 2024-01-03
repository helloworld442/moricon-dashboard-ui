<template>
  <div class="write-layout">
    <WriteHeader />
    <slot />
  </div>
</template>

<script setup>
import WriteHeader from "../components/Header/WriteHeader";
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.write-layout {
  position: relative;
  left: 50%;
  width: 100%;
  height: auto;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $background-color-0;

  @include tablet {
    width: 100%;
    padding: 0 10vw;
    box-sizing: border-box;
  }
}
</style>
