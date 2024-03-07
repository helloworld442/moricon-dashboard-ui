<template>
  <section class="board-detail-info">
    <div class="content-status"><span /> <b>위험 상태</b></div>
    <h3 class="content-title">한국 플로젠 당진공사 <b>당진공사</b></h3>
    <div class="content-info">
      <span class="info-participant"><b>담당부서</b> R&D 팀</span>
      <span class="info-participant"><b>등록일 (현재 상태)</b> 2023.04.21</span>
      <span class="info-participant"><b>센서 장애율</b> 55 %</span>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-detail-info {
  width: 100%;
  padding-bottom: 12px;
  box-sizing: border-box;

  //   border-bottom: 1.5px solid $border-color-0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.content-status {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;

    border-radius: 50%;
    background: #d9434e;
  }

  b {
    margin-bottom: 1px;

    font-size: 0.775rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #d9434e;
  }
}

.content-title {
  padding: 0;
  margin: 0;
  margin-top: 2px;

  font-size: 1.25rem;
  font-weight: 650;
  font-family: "Noto Sans KR";
  color: #444;

  b {
    display: block;
    padding: 0;
    margin: 0;

    font-size: 0.775rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #777;
  }
}

.content-info {
  padding: 12px 0;
  margin: 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  .info-participant {
    b {
      display: block;

      margin-bottom: 4px;

      font-size: 0.875rem;
      font-weight: 650;
      font-family: "Noto Sans KR";
      color: #444;
    }

    font-size: 0.85rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #666;
  }
}
</style>
