<template>
  <aside class="repo-sidebar" :class="classObject"></aside>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["isOpen"]);

const classObject = computed(() => {
  return { active: props.isOpen };
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.repo-sidebar {
  width: 0;
  height: 100vh;
  background: $background-color-1;
  display: none;
  transition: width 0.5s ease;

  &.active {
    width: 350px;
    display: inline-block;
    animation: slideIn 0.5s ease;
  }

  @keyframes slideIn {
    from {
      width: 0;
    }
    to {
      width: 350px;
    }
  }
}
</style>
