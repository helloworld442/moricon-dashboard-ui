<template>
  <div class="dashboard-layout">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.dashboard-layout {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 1440px;
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
