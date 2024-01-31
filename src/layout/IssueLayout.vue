<template>
  <div class="issue-layout">
    <Header />
    <slot />
  </div>
</template>

<script setup>
import Header from "../components/@common/Header";
</script>

<style lang="scss" scoped>
.issue-layout {
  position: relative;
  left: 50%;
  max-width: 1440px;
  height: auto;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
}
</style>
