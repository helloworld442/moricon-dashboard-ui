<template>
  <ul class="board-filter-widget" :class="activeObject">
    <li class="widget-item">
      <span class="item-icon" style="background: #d9434e" />
      <p class="item-desc">위험 프로젝트</p>
    </li>

    <li class="widget-item">
      <span class="item-icon" style="background: #e76f51" />
      <p class="item-desc">주의 프로젝트</p>
    </li>

    <li class="widget-item">
      <span class="item-icon" style="background: #2a9d8f" />
      <p class="item-desc">안전 프로젝트</p>
    </li>

    <li class="widget-item">
      <span class="item-icon" style="background: #c8c8c8" />
      <p class="item-desc">기타 프로젝트</p>
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const activeObject = computed(() => {
  return { disabled: route.path.includes("/dashboard/list") };
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-filter-widget {
  padding: 0;
  margin: 0;
  list-style: none;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  &.disabled {
    display: none;
  }
}

.widget-item {
  padding: 13px 24px;
  box-sizing: border-box;

  border: 1.5px solid $border-color-0;
  border-radius: 24px;

  background-color: #fff;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  .item-icon {
    display: inline-block;
    width: 16px;
    height: 16px;

    border-radius: 50%;
  }

  .item-desc {
    padding: 0;
    margin: 0;
    margin-bottom: 2px;

    font-size: 0.775rem;
    font-weight: 450;
    font-family: "Noto Sans KR";
    color: #444;
  }
}
</style>
