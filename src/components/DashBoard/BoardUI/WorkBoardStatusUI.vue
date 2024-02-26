<template>
  <section class="work-board-status">
    <label class="status-label">Work Board Status</label>
    <div class="status-menu">
      <div class="status-item green">
        <b class="numbering">2</b>
        <p>작업 수<b>From 02:00 PM</b></p>
      </div>
      <div class="status-item red">
        <b class="numbering">4</b>
        <p>위험 수<b>From 02:00 PM</b></p>
      </div>
      <div class="status-item gray">
        <b class="numbering">1</b>
        <p>취소 수<b>From 02:00 PM</b></p>
      </div>
      <div class="status-item blue">
        <b class="numbering">2</b>
        <p>중단 수<b>From 02:00 PM</b></p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.work-board-status {
  position: absolute;
  top: 0;
  right: 0;
  width: 320px;
  height: 100%;
}

.status-label {
  font-size: 0.775rem;
  font-weight: 600;
  font-family: "Montserrat", "Noto Sans KR";
  color: #868686;
}

.status-menu {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 18px;
  grid-row-gap: 18px;
}

.status-item {
  padding: 0;
  box-sizing: border-box;

  border-radius: 24px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    display: flex;
    flex-direction: column;

    padding: 0;
    margin: 0;

    font-size: 0.775rem;
    font-weight: 600;
    font-family: "Montserrat", "Noto Sans KR";
  }

  b {
    font-size: 0.625rem;
    font-weight: 500;
    font-family: "Montserrat", "Noto Sans KR";
  }

  .numbering {
    width: 40px;
    height: 40px;

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 12px;

    font-size: 1.35rem;
    font-weight: 600;
    font-family: "Montserrat", "Noto Sans KR";
    color: #fff;
  }
}
</style>
