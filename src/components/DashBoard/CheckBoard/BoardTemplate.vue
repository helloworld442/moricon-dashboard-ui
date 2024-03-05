<template>
  <section class="check-board">
    <label class="board-label">현장점검 현황 <b>ON-SITE CHECK</b></label>
    <BoardGraph />
    <BoardInfo />
  </section>
</template>

<script setup>
import BoardGraph from "./BoardGraph";
import BoardInfo from "./BoardInfo";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.check-board {
  position: relative;
  flex: 1.2;
  height: 100%;

  padding: 10px;
  box-sizing: border-box;

  border-radius: 12px;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.board-label {
  margin-left: 6px;
  margin-top: 4px;

  font-size: 0.925rem;
  font-weight: 600;
  font-family: "Noto Sans KR";
  color: #444;

  b {
    display: block;
    font-size: 0.55rem;
    font-weight: 400;
    font-family: "Montserrot", "Noto Sans KR";
  }
}
</style>
