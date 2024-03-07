<template>
  <ul class="board-list-core">
    <BoardListItem title="한국 플로젠 당진공사" />
    <BoardListItem title="한국 플로젠 당진공사" />
    <BoardListItem title="한국 플로젠 당진공사" />
    <BoardListItem title="대전 교통공사 Test-Bed" />
    <BoardListItem title="대전 교통공사 Test-Bed" />
  </ul>
</template>

<script setup>
import BoardListItem from "./BoardListItem";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-list-core {
  width: 100%;
  height: 623px;

  padding: 8px 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;

  overflow-y: scroll;
}
</style>
