<template>
  <section class="board-detail-sensor">
    <label class="detail-sensor-label">센서 현황 <b>SENSORS</b></label>

    <div class="detail-sensor-box">
      <div class="sensor-info-box">
        <label class="info-label">수중계</label>
        <D3Sensor class="info-chart" />
      </div>

      <div class="sensor-info-box">
        <label class="info-label">하중계</label>
        <D3Sensor class="info-chart" />
      </div>

      <div class="sensor-info-box">
        <label class="info-label">지중검사계</label>
        <D3Sensor class="info-chart" />
      </div>

      <div class="sensor-info-box">
        <label class="info-label">변형율</label>
        <D3Sensor class="info-chart" />
      </div>
    </div>
  </section>
</template>

<script setup>
import D3Sensor from "../../@common/D3/D3Sensor";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-detail-sensor {
  width: 100%;
  height: 280px;
  padding-top: 12px;
  padding-bottom: 24px;
  box-sizing: border-box;
}

.detail-sensor-label {
  display: inline-block;

  margin-bottom: 10px;
  font-size: 0.875rem;
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

.detail-sensor-box {
  width: 100%;
  height: 350px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 12px;
}

.sensor-info-box {
  width: 100%;
  height: 100%;

  border: 0.5px solid $border-color-0;
  border-radius: 6px;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-label {
  display: inline-block;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;

  font-size: 0.825rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #5e6ad7;
  text-align: center;

  background: #e9edf8;
}

.info-chart {
  margin-top: 12px;
}
</style>
