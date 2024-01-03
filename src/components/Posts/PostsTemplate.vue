<template>
  <main class="posts-template">
    <slot />
  </main>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.posts-template {
  width: 1078px;
  margin-top: 36px;
  display: flex;
  justify-content: space-between;

  @include tablet {
    width: 100%;
    margin-top: 24px;
    flex-direction: column-reverse;
    gap: 36px;
  }
}
</style>
