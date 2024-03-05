<template>
  <section class="weather-board-ui">
    <label class="board-label">날씨 현황 <b>PROJECT WEATHER</b></label>
    <div class="board-info-box">
      <label class="info-box-label">
        <ArrowLeft /> <b>방마교 가속도 #1</b> <ArrowRight />
      </label>
      <BoardInfo />
    </div>
  </section>
</template>

<script setup>
import BoardInfo from "./BoardInfo";
import ArrowLeft from "../../../assets/icons/ArrowLeft";
import ArrowRight from "../../../assets/icons/ArrowRight";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.weather-board-ui {
  flex: 0.6;
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
  margin-top: 4px;
  margin-left: 6px;

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

.board-info-box {
  width: 100%;
  height: auto;

  .info-box-label {
    padding: 0 4px;
    box-sizing: border-box;

    margin-top: 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      width: 14px;
      height: 14px;
    }

    b {
      font-size: 0.8rem;
      font-weight: 550;
      font-family: "Noto Sans KR";
      color: #444;
    }
  }
}
</style>
