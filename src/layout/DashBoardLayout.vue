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
  width: 100%;
  height: 100%;
}
</style>
