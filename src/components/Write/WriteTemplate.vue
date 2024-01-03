<template>
  <main class="write-template">
    <slot />
  </main>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.write-template {
  width: 1150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @include tablet {
    width: 100%;
  }
}
</style>
