<template>
  <div ref="chart" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const chart = ref(null);

onMounted(() => {
  const data = [10, 2, 4];
  const colors = ["#d9434e", "#f4a261", "#2a9d8f"];

  const width = 108;
  const height = 108;

  const pie = d3
    .pie()
    .value((d) => d)
    .padAngle(0.08);

  const innerRadius = 48;
  const outerRadius = Math.min(width, height) / 2;

  const svg = d3
    .select(chart.value)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

  const arc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .cornerRadius(8);

  svg
    .selectAll("path")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", (d, i) => colors[i]);

  svg
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", innerRadius)
    .attr("fill", "white");

  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "0.3em")
    .text("55")
    .attr("fill", colors[0])
    .attr("font-family", "Noto Sans KR")
    .attr("font-size", "1.75rem")
    .attr("font-weight", "550");
});
</script>
