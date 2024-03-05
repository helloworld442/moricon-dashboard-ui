<template>
  <div class="board-list-head">
    <p>프로젝트</p>
    <p>구조물</p>
    <p>등록일 (현재 상황)</p>
    <p>안전상태</p>
  </div>
  <ul class="board-list">
    <BoardItem
      title="대전 교통공사 Test-bed"
      structure="U-type"
      date="2023.03.04"
      status="#e76f51"
    />
    <BoardItem
      title="대전 교통공사 Test-bed"
      structure="지속역"
      date="2023.03.04"
      status="#f4a261"
    />
    <BoardItem
      title="한국플로젠 당진공사"
      structure="당진공사"
      date="2023.03.04"
      status="#2a9d8f"
    />
    <BoardItem
      title="한국플로젠 당진공사"
      structure="당진공사 (Br)"
      date="2023.03.04"
      status="#d9d9d9"
    />
  </ul>
</template>

<script setup>
import BoardItem from "./BoardItem";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-list-head {
  width: 100%;
  height: auto;

  padding: 0 6px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  flex: 5.5 1 0%;
  gap: 20px;

  p {
    padding: 0;
    margin: 0;

    font-size: 0.675rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #777;

    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
  }

  p:first-child {
    flex: 1 1 180px;
  }
}

.board-list {
  width: 100%;
  height: 220px;

  padding: 0 6px;
  margin: 0;
  margin-bottom: 14px;
  box-sizing: border-box;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
