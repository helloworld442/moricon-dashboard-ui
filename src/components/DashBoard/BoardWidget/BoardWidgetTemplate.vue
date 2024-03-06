<template>
  <div class="board-widget-template">
    <BoardSearchWidget />
    <BoardFilterWidget />
  </div>
</template>

<script setup>
import BoardSearchWidget from "./BoardSearchWidget";
import BoardFilterWidget from "./BoardFilterWidget";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-widget-template {
  position: absolute;
  top: 20px;
  left: 105px;
  z-index: 2;

  width: auto;
  height: auto;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 72px;
}
</style>
