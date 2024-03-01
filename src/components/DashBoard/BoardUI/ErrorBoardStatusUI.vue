<template>
  <section class="error-board-status">
    <div class="status-graph" ref="progressBar" />
    <div class="status-board">
      <label class="board-label">ERROR SENSOR</label>
      <p class="board-number">21<b>/ 80</b></p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const progressBar = ref(null);

onMounted(() => {
  const width = 42;
  const height = 250;

  const svg = d3
    .select(progressBar.value)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  svg
    .append("rect")
    .attr("width", width)
    .attr("height", 0.6 * height)
    .attr("y", height * (1 - 0.6))
    .attr("fill", "#f24c00");
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.error-board-status {
  position: relative;
  width: 205px;
  height: 100%;

  border-right: 1px solid $border-color-0;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.status-graph {
  position: relative;
  width: 42px;
  height: 100%;

  border-radius: 24px;
  overflow: hidden;

  margin-right: 16px;

  background: rgb(233, 240, 251);
}

.status-board {
  margin-top: 4px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .board-label {
    font-size: 0.715rem;
    font-weight: 600;
    font-family: "Montserrat", "Noto Sans KR";
    color: #555;
  }

  .board-number {
    padding: 0;
    margin: 0;

    font-size: 3.8rem;
    font-weight: 450;
    font-family: "Montserrat", "Noto Sans KR";
    color: #333;

    b {
      font-size: 0.8rem;
      font-weight: 450;
      font-family: "Montserrat", "Noto Sans KR";
      color: #555;
    }
  }
}
</style>
