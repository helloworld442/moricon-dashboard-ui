<template>
  <section class="circle-board-status">
    <label class="status-label">CHEKCKING</label>
    <div ref="chart" class="status-chart"></div>
    <div class="status-chart-desc">
      <p><b style="background: #f24c00" />미점검 센서</p>
      <p><b style="background: #fc7a1e" />대기 센서</p>
      <p><b style="background: #f9c784" />점검예정 센서</p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as d3 from "d3";

const chart = ref(null);

onMounted(() => {
  const data = [
    { label: "Item 1", value: 20, color: "#f24c00" },
    { label: "Item 2", value: 30, color: "#fc7a1e" },
    { label: "Item 3", value: 50, color: "#f9c784" },
  ];

  const width = 175;
  const height = 175;
  const radius = Math.min(width, height) / 2;

  const svg = d3
    .select(chart.value)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

  const color = d3
    .scaleOrdinal()
    .domain(data.map((d) => d.label))
    .range(data.map((d) => d.color));

  const pie = d3
    .pie()
    .value((d) => d.value)
    .sort(null);

  const arc = d3.arc().innerRadius(0).outerRadius(radius);

  const arcs = svg
    .selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

  arcs
    .append("path")
    .attr("d", arc)
    .attr("fill", (d) => color(d.data.label));

  svg
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", radius * 0.775)
    .attr("fill", "white")
    .attr("fill-opacity", 0.825);
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.circle-board-status {
  position: relative;
  width: 220px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.status-label {
  margin-top: 4px;
  font-size: 0.715rem;
  font-weight: 600;
  font-family: "Montserrat", "Noto Sans KR";
  color: #555;
}

.status-chart {
  margin-top: 12px;
}

.status-chart-desc {
  position: absolute;
  bottom: 48px;
  right: -40px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;

  p {
    margin: 0;

    font-size: 0.625rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #555;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;

    b {
      display: inline-block;
      width: 0.65rem;
      height: 0.65rem;

      border-radius: 50%;
    }
  }
}
</style>
