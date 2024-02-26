<template>
  <div class="dashboard-board">
    <section class="board-section-01">
      <ErrorBoardStatusUI />
      <WorkBoardStatusUI />
    </section>
  </div>
</template>

<script setup>
import ErrorBoardStatusUI from "./BoardUI/ErrorBoardStatusUI";
import WorkBoardStatusUI from "./BoardUI/WorkBoardStatusUI";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.dashboard-board {
  position: absolute;
  top: 53%;
  left: 36px;
  width: 620px;
  height: 640px;
  padding: 18px 30px;
  box-sizing: border-box;
  border: 1px solid $border-color-0;
  border-radius: 5px;
  background: #fff;
  transform: translateY(-50%);
}

.board-section-01 {
  position: relative;
  width: 100%;
  height: 180px;
  border-bottom: 1px solid $border-color-0;
}
</style>
