<template>
  <div class="dashboard-layout">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.dashboard-layout {
  position: relative;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
