<template>
  <div class="board-head">
    <div class="head-item">
      <span class="item-line" style="background: #d9434e" />
      <p class="item-desc">55 <b>위험 프로젝트</b></p>
    </div>

    <div class="head-item">
      <span class="item-line" style="background: #e76f51" />
      <p class="item-desc">10 <b>주의 프로젝트</b></p>
    </div>

    <div class="head-item">
      <span class="item-line" style="background: #2a9d8f" />
      <p class="item-desc">24 <b>안전 프로젝트</b></p>
    </div>

    <div class="head-item">
      <span class="item-line" style="background: #c8c8c8" />
      <p class="item-desc">12 <b>기타 프로젝트</b></p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-head {
  width: 100%;

  padding: 10px 6px;
  box-sizing: border-box;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
}

.head-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;

  .item-line {
    display: inline-block;
    width: 3px;
    height: 34px;

    border-radius: 24px;
  }

  .item-desc {
    padding: 0;
    margin: 0;

    font-size: 1.4rem;
    font-weight: 450;
    font-family: "Montserrot", sans-serif;
    color: #444;

    b {
      display: block;
      padding: 0;
      margin: 0;

      font-size: 0.65rem;
      font-weight: 400;
      font-family: "Montserrot", sans-serif;
      color: #777;
    }
  }
}
</style>
