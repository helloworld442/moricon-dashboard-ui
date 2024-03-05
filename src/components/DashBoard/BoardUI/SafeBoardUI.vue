<template>
  <section class="safe-board-ui">
    <label class="board-label">안전진단 검사 <b>SAFE CHECK</b></label>
    <div class="board-graph-box"></div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.safe-board-ui {
  flex: 1;
  height: 100%;

  border-radius: 12px;

  padding: 10px;
  box-sizing: border-box;

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
</style>
