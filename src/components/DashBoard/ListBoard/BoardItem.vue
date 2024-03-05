<template>
  <li class="board-item">
    <p class="item-title">{{ title }}</p>
    <p class="item-structure">{{ structure }}</p>
    <p class="item-date">{{ date }}</p>
    <p class="item-status"><span :style="{ background: status }" /></p>
  </li>
</template>

<script setup>
const props = defineProps(["title", "structure", "date", "status"]);
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-item {
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  flex: 5.5 1 0%;
  gap: 20px;
}

.item-title,
.item-structure,
.item-date,
.item-status {
  padding: 0;
  margin: 0;

  font-size: 0.775rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: #444;

  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}

.item-title {
  flex: 1 1 180px;
  cursor: pointer;

  &:hover {
    color: #f48160;
  }
}

.item-status {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  span {
    display: inline-block;

    width: 18px;
    height: 18px;

    border-radius: 50%;
  }
}
</style>
