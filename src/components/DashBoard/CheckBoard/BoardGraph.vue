<template>
  <section class="board-graph">
    <div class="graph" ref="graph" />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const graph = ref(null);

onMounted(() => {
  const data = [
    5, 8, 12, 15, 10, 8, 12, 14, 18, 20, 12, 16, 14, 10, 12, 16, 14, 10, 8,
  ];

  const width = 440;
  const height = 160;
  const padding = 24;

  const svg = d3
    .select(graph.value)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const xScale = d3
    .scaleBand()
    .rangeRound([padding, width])
    .padding(0.6)
    .domain(data.map((_, i) => i));

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([height - padding, padding]);

  const circleColor = (item) => {
    if (item >= 20) return "#6acc7f";

    if (item >= 15) return "#f4d74d";

    if (item >= 10) return "#e9904f";

    if (item >= 5) return "#d9434e";
  };

  svg
    .append("g")
    .attr("transform", `translate(0,${height - 16})`)
    .call(d3.axisBottom(xScale).tickSize(0));

  svg
    .append("g")
    .attr("transform", `translate(24, 0)`)
    .call(d3.axisLeft(yScale).ticks(2).tickSize(0));

  svg
    .append("g")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", () => yScale(0))
    .attr("width", xScale.bandwidth())
    .attr("height", 0)
    .attr("fill", "#ededed")
    .transition()
    .duration(2500)
    .attr("y", (d) => yScale(d))
    .attr("height", (d) => height - padding - yScale(d));

  svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => xScale(i) + xScale.bandwidth() / 2)
    .attr("cy", () => yScale(0))
    .transition()
    .duration(2500)
    .attr("cy", (d) => yScale(d))
    .attr("r", xScale.bandwidth() / 2)
    .attr("fill", (d) => circleColor(d));

  svg
    .selectAll(".tick text")
    .attr("font-size", ".775rem")
    .attr("font-weight", "550")
    .attr("font-family", "Montserrot")
    .attr("color", "#c8c8c8");

  svg.selectAll(".domain").remove();
});
</script>

<style lang="scss" scoped>
.board-graph {
  width: 100%;
  height: 160px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
