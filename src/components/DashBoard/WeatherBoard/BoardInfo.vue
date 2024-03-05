<template>
  <section class="board-info">
    <div class="info-speed">
      <label class="speed-label">3축 가속도</label>
      <p class="speed-number">0.004 <b>/ 0.001g</b></p>
    </div>
    <div class="info-weather">
      <div class="weather-temperature">
        <label class="temperature-label">온도</label>
        <p class="temperature-number">23.5 <b>°C</b></p>
      </div>

      <div class="weather-humidity">
        <label class="humidity-label">습도</label>
        <p class="humidity-number">46.5 <b>%</b></p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-info {
  width: 100%;
  height: 100%;

  padding: 20px 8px;
  box-sizing: border-box;
}

.info-speed {
  padding-bottom: 20px;
  box-sizing: border-box;

  border-bottom: 1px solid $border-color-0;

  .speed-label {
    font-size: 0.7rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #444;
  }

  .speed-number {
    padding: 0;
    margin: 0;

    font-size: 2rem;
    font-weight: 400;
    font-family: "Montserrot", "Noto Sans KR";
    color: #444;

    b {
      font-size: 0.65rem;
      font-weight: 400;
      font-family: "Montserrot", "Noto Sans KR";
      color: #555;
    }
  }
}

.info-weather {
  width: 100%;
  height: auto;

  padding-top: 14px;
  box-sizing: border-box;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.weather-temperature,
.weather-humidity {
  .temperature-label,
  .humidity-label {
    font-size: 0.7rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #444;
  }

  .temperature-number,
  .humidity-number {
    padding: 0;
    margin: 0;

    font-size: 1.4rem;
    font-weight: 400;
    font-family: "Montserrot", "Noto Sans KR";
    color: #444;

    b {
      font-size: 0.65rem;
      font-weight: 400;
      font-family: "Montserrot", "Noto Sans KR";
      color: #555;
    }
  }
}

.weather-temperature {
  padding-right: 20px;
  padding-bottom: 12px;
  box-sizing: border-box;

  border-right: 0.5px solid $border-color-0;
}

.weather-humidity {
  padding-left: 20px;
  padding-bottom: 12px;
  box-sizing: border-box;

  border-left: 0.5px solid $border-color-0;
}
</style>
