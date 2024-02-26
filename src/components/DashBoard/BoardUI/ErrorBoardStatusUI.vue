<template>
  <section class="error-board-status">
    <label class="status-label">Error Device Count</label>
    <div class="status-progress">
      <span class="progress-inner" />
    </div>
    <p class="status-count">5 <b>/ 6</b></p>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.error-board-status {
  display: inline-block;
  position: relative;
  width: 220px;
  height: 100%;
}

.status-label {
  font-size: 0.775rem;
  font-weight: 600;
  font-family: "Montserrat", "Noto Sans KR";
  color: #868686;
}

.status-progress {
  position: relative;
  margin-top: 12px;
  width: 36px;
  height: 100px;
  border-radius: 24px;
  background: $background-color-1;

  .progress-inner {
    position: absolute;
    bottom: 0;
    left: 0;

    display: inline-block;

    width: 100%;
    height: 80%;

    border-bottom-right-radius: 24px;
    border-bottom-left-radius: 24px;
    background: $background-color-2;
  }
}

.status-count {
  position: absolute;
  top: 24px;
  left: 60px;

  padding: 0;
  margin: 0;

  font-size: 4.5rem;
  font-weight: 400;
  font-family: "Montserrat", "Noto Sans KR";
  color: #333;

  b {
    font-size: 1.05rem;
    font-weight: 400;
    font-family: "Montserrat", "Noto Sans KR";
    color: #868686;
  }
}
</style>
