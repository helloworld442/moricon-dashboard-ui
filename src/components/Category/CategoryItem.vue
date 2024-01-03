<template>
  <RouterLink :to="location">
    <h4 class="item-description">{{ categoryDesc }}</h4>
    <h3 class="item-title">{{ categoryName }}</h3>
  </RouterLink>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["categoryId", "categoryName", "categoryDesc"]);

const location = computed(() => {
  return "/posts/" + props.categoryId + "/all";
});
</script>

<style lang="scss" scoped>
.item-description {
  margin-bottom: 6px;
  font-size: 0.75rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #f8f8f8;
  line-height: 1rem;
}

.item-title {
  margin-top: 6px;
  font-size: 1.6rem;
  font-weight: 300;
  font-family: "Jua";
  color: #f8f8f8;
}
</style>
