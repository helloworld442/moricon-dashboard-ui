<template>
  <span class="tag" :class="classObject">{{ text }}</span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["text", "color"]);

const classObject = computed(() => {
  return props.color;
});
</script>

<style lang="scss" scoped>
.tag {
  padding: 5px 6px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 600;
  font-family: "Noto Sans KR";

  &.red {
    color: #ff6f6f;
    background: #ffecec;
  }

  &.green {
    color: #66bb6a;
    background: #edf5ed;
  }
}
</style>
