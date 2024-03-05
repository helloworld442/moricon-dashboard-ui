<template>
  <section class="sensor-board">
    <label class="board-label">센서 현황 <b>SENSORS</b></label>
    <BoardGraph />
  </section>
</template>

<script setup>
import BoardGraph from "./BoardGraph";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.sensor-board {
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
