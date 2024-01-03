<template>
  <Quotes class="icon" @click="onClickIcon" />
</template>

<script setup>
import Quotes from "../../../assets/icons/Quote";
import { defineProps, defineEmits } from "vue";

const props = defineProps(["content"]);
const emit = defineEmits(["clickEvent"]);

function onClickIcon() {
  let content = props.content;
  const QUOTES_TEXT = "> quote";

  content.includes(QUOTES_TEXT)
    ? (content = content.replace(QUOTES_TEXT, ""))
    : (content = content + QUOTES_TEXT);

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
