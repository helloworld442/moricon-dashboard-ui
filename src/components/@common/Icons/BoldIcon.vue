<template>
  <Bold class="icon" @click="onClickIcon" />
</template>

<script setup>
import Bold from "../../../assets/icons/Bold";
import { defineProps, defineEmits } from "vue";

const props = defineProps(["content"]);
const emit = defineEmits(["clickEvent"]);

function onClickIcon() {
  let content = props.content;
  const CODE_TEXT = "**paragraph**";

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
