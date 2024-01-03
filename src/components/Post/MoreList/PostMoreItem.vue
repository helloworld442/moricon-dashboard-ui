<template>
  <RouterLink class="more-item-title" :to="location">{{ title }}</RouterLink>
  <ArrowRight class="more-item-icon" />
</template>

<script setup>
import ArrowRight from "../../../assets/icons/ArrowRight";
import { defineProps, computed } from "vue";

const props = defineProps(["title", "id"]);

const location = computed(() => {
  return "/post/" + props.id;
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.more-item-title {
  width: 90%;
  font-size: 0.775rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @include tablet {
    font-size: 0.825rem;
  }
}

.more-item-icon {
  margin-right: 4px;
  fill: $main-color-dark;
}
</style>
