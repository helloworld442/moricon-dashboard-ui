<template>
  <div class="board-info">
    <span class="info-item">
      <p class="item-title">CHECKING</p>
      <p class="item-number">30<b>%</b></p>
      <ArrowUp class="item-icon" />
    </span>
    <span class="info-item">
      <p class="item-title">NEED</p>
      <p class="item-number">15<b>%</b></p>
      <ArrowDown class="item-icon" />
    </span>
    <span class="info-item">
      <p class="item-title">CHECK</p>
      <p class="item-number">30<b>%</b></p>
      <ArrowUp class="item-icon" />
    </span>
    <span class="info-item">
      <p class="item-title">NON-CHECK</p>
      <p class="item-number">30<b>%</b></p>
      <ArrowUp class="item-icon" />
    </span>
  </div>
  <div class="board-info-type">2주간의 데이터 분석</div>
</template>

<script setup>
import ArrowDown from "../../../assets/icons/ArrowDown";
import ArrowUp from "../../../assets/icons/ArrowUp";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-info {
  width: 100%;

  padding: 0 14px;
  margin-top: 20px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
}

.info-item {
  .item-title {
    padding: 0;
    margin: 0;

    font-size: 0.7rem;
    font-weight: 500;
    font-family: "Montserrot", sans-serif;
    color: #555;
  }

  .item-number {
    display: inline-block;
    padding: 0;
    margin: 0;
    margin-top: 2px;

    font-size: 1.45rem;
    font-weight: 450;
    font-family: "Montserrot", sans-serif;
    color: #555;

    b {
      padding-left: 4px;

      font-size: 0.75rem;
      font-weight: 400;
      font-family: "Montserrot", sans-serif;
      color: #888;
    }
  }

  .item-icon {
    width: auto;
    height: 16px;

    margin-left: 6px;

    stroke-width: 3;
    stroke: #f24c00;
  }
}

.board-info-type {
  position: absolute;
  bottom: 24px;
  right: 24px;

  font-size: 0.6rem;
  font-weight: 450;
  font-family: "Noto Sans KR";
  color: #444;
}
</style>
