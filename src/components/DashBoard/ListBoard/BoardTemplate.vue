<template>
  <section class="list-board">
    <label class="board-label">프로젝트 현황 <b>PROJECT LIST</b></label>
    <BoardHead />
    <BoardList />
  </section>
</template>

<script setup>
import BoardHead from "./BoardHead";
import BoardList from "./BoardList";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.list-board {
  flex: 2;
  height: 100%;

  padding: 10px 12px;
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
