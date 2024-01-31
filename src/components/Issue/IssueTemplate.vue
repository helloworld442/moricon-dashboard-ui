<template>
  <main class="issue-template">
    <slot />
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.issue-template {
  width: 100%;
  height: 100vh;
}
</style>
