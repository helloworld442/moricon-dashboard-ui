<template>
  <div class="dashboard-detail-head">
    <RouterLink class="head-left-item" to="/dashboard/list">
      <ArrowRight /> <b>이전</b>
    </RouterLink>
    <div class="head-right-item"><b>더보기</b> <ArrowRight /></div>
  </div>
</template>

<script setup>
import ArrowRight from "../../../assets/icons/ArrowRight";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.dashboard-detail-head {
  margin-bottom: 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.head-left-item,
.head-right-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  text-decoration: none;

  b {
    margin-bottom: 1px;

    font-size: 0.775rem;
    font-weight: 500;
    font-family: "Noto Sans KR";
    color: #777;
  }

  svg {
    width: 0.775rem;
    height: 0.775rem;
    stroke-width: 3;
    stroke: #777;
  }
}

.head-left-item > svg {
  transform: rotate(-180deg);
}
</style>
