<template>
  <section class="dashboard-board">
    <div class="board-section-front">
      <ListBoardUI />
      <SafeBoardUI />
    </div>
    <div class="board-section-back">
      <SensorBoardUI />
      <CheckBoardUI />
      <WeatherBoardUI />
    </div>
  </section>
</template>

<script setup>
import ListBoardUI from "./ListBoard/BoardTemplate";
import SafeBoardUI from "./BoardUI/SafeBoardUI";
import SensorBoardUI from "./SensorBoard/BoardTemplate";
import CheckBoardUI from "./CheckBoard/BoardTemplate";
import WeatherBoardUI from "./WeatherBoard/BoardTemplate";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.dashboard-board {
  width: calc(100% - 230px);
  height: 100%;

  padding: 30px 20px;
  box-sizing: border-box;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
}

.board-section-front {
  display: flex;
  width: 100%;
  height: 380px;
  display: flex;
  gap: 18px;
}

.board-section-back {
  display: flex;
  width: 100%;
  height: 324px;
  display: flex;
  gap: 18px;
}
</style>
