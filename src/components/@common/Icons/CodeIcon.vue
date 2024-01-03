<template>
  <Code class="icon" @click="onClickIcon" />
</template>

<script setup>
import Code from "../../../assets/icons/Code";
import { defineProps, defineEmits } from "vue";

const props = defineProps(["content"]);
const emit = defineEmits(["clickEvent"]);

function onClickIcon() {
  let content = props.content;
  const CODE_TEXT = "```사용하는_프로그래밍언어\n코드블럭\n```";

  content.includes(CODE_TEXT)
    ? (content = content.replace(CODE_TEXT, ""))
    : (content = content + CODE_TEXT);

  emit("clickEvent", content);
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.icon {
  fill: $font-color-3;
  cursor: pointer;

  &:hover,
  &:active {
    fill: $main-color-dark;
  }
}
</style>
