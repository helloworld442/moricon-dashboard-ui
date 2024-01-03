<template>
  <Italic class="icon" @click="onClickIcon" />
</template>

<script setup>
import Italic from "../../../assets/icons/Italic";
import { defineProps, defineEmits } from "vue";

const props = defineProps(["content"]);
const emit = defineEmits(["clickEvent"]);

function onClickIcon() {
  let content = props.content;
  const ITALIC_TEXT = "*italic*";

  content.includes(ITALIC_TEXT)
    ? (content = content.replace(ITALIC_TEXT, ""))
    : (content = content + ITALIC_TEXT);

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
