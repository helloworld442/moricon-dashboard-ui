<template>
  <div ref="graph" class="board-graph" />
  <div class="board-graph-type">
    <p><span style="background: #e76f51" /> <b>위험</b></p>
    <p><span style="background: #f4a261" /> <b>주의</b></p>
    <p><span style="background: #2a9d8f" /> <b>안전</b></p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const graph = ref(null);

onMounted(() => {
  const data = [
    { label: "수위계", value: { 위험: 9, 주의: 3, 안전: 3 }, total: 15 },
    { label: "하중계", value: { 위험: 4, 주의: 1, 안전: 10 }, total: 19 },
    { label: "지중검사계", value: { 위험: 24, 주의: 3, 안전: 4 }, total: 31 },
    { label: "변형율", value: { 위험: 4, 주의: 3, 안전: 3 }, total: 10 },
  ];
  const colors = ["#e76f51", "#f4a261", "#2a9d8f"];

  const width = 440;
  const height = 220;
  const padding = 24;

  const svg = d3
    .select(graph.value)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const x = d3
    .scaleBand()
    .rangeRound([padding, width])
    .padding(0.2)
    .domain(data.map((d) => d.label));

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data.map((d) => d.total))])
    .range([height - padding, padding]);

  svg
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(-5,${height - 16})`)
    .call(d3.axisBottom(x).tickSize(0));

  svg
    .append("g")
    .attr("class", "y-axis")
    .attr("transform", `translate(24, 0)`)
    .call(
      d3
        .axisLeft(y)
        .ticks(3)
        .tickSizeInner(-width + padding * 2)
        .tickSizeOuter(0)
    );

  svg
    .selectAll(".tick line")
    .attr("stroke", "#ccc")
    .attr("stroke-dasharray", "2.5");

  svg
    .selectAll(".x-axis .tick text")
    .attr("font-size", ".7rem")
    .attr("font-weight", "500")
    .attr("font-family", "Montserrot")
    .attr("color", "#666");

  svg
    .selectAll(".y-axis .tick text")
    .attr("font-size", ".775rem")
    .attr("font-weight", "550")
    .attr("font-family", "Montserrot")
    .attr("color", "#c8c8c8");

  svg.selectAll(".domain").remove();

  const barWidth = x.bandwidth() / 3;

  svg
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "bar")
    .attr("transform", (d) => `translate(${x(d.label)}, 0)`)
    .selectAll("rect")
    .data((d) => Object.values(d.value))
    .enter()
    .append("rect")
    .attr("x", (_, i) => i * barWidth)
    .attr("y", () => y(0))
    .attr("rx", 3)
    .attr("ry", 3)
    .attr("width", barWidth * 0.65)
    .attr("height", 0)
    .style("fill", (d, i) => colors[i])
    .transition()
    .duration(2500)
    .attr("y", (d) => y(d))
    .attr("height", (d) => height - padding - y(d));
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-graph {
  width: 100%;
  height: 220px;
}

.board-graph-type {
  width: 100%;

  padding: 0 12px;
  margin-top: 16px;
  box-sizing: border-box;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;

  p {
    padding: 0;
    margin: 0;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;

    span {
      display: inline-block;
      width: 30px;
      height: 5px;
      border-radius: 48px;
    }

    b {
      font-size: 0.7rem;
      font-weight: 400;
      font-family: "Noto Sans KR";
      color: #444;
    }
  }
}
</style>
