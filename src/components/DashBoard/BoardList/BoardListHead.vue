<template>
  <div class="board-list-head">
    <div class="list-head-item">
      <span class="item-line" style="background: #d9434e" />
      <p class="item-desc">55 <b>위험 프로젝트</b></p>
    </div>

    <div class="list-head-item">
      <span class="item-line" style="background: #e76f51" />
      <p class="item-desc">10 <b>주의 프로젝트</b></p>
    </div>

    <div class="list-head-item">
      <span class="item-line" style="background: #2a9d8f" />
      <p class="item-desc">24 <b>안전 프로젝트</b></p>
    </div>

    <div class="list-head-item">
      <span class="item-line" style="background: #c8c8c8" />
      <p class="item-desc">12 <b>기타 프로젝트</b></p>
    </div>
  </div>
</template>

<script setup>
import Setting from "../../../assets/icons/Setting";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-list-head {
  width: 100%;
  padding: 0 24px;
  padding-bottom: 30px;
  box-sizing: border-box;

  border-bottom: 1px solid $border-color-0;

  display: flex;
  justify-content: flex-start;
  gap: 26px;
}

.list-head-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;

  .item-line {
    display: inline-block;
    width: 3px;
    height: 30px;

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

      font-size: 0.6rem;
      font-weight: 400;
      font-family: "Montserrot", sans-serif;
      color: #777;
    }
  }
}
</style>
