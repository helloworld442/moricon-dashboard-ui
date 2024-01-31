<template>
  <div class="issue-setting">
    <ArrowRight class="icon-arrow" @click="onClickArrow" />
    <Ellipsis class="icon-setting" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Ellipsis from "../../../assets/icons/Ellipsis";
import ArrowRight from "../../../assets/icons/ArrowRight";

const router = useRouter();

function onClickArrow() {
  router.push("/issue");
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.issue-setting {
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
}

.icon-arrow {
  stroke: #888;
  stroke-width: 2.5;

  &:hover {
    stroke: #333;
  }
}

.icon-setting {
  fill: #888;

  &:hover {
    fill: #333;
  }
}
</style>
