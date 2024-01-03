<template>
  <main class="post-template">
    <slot />
  </main>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.post-template {
  width: 1078px;
  margin-top: 16px;
  opacity: 0;
  animation: fadeInOutAnimation 0.5s ease-in-out forwards;

  @include tablet {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
@keyframes fadeInOutAnimation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
