<template>
  <DashBoardLayout>
    <DashBoardTitle />
    <DashBoardToggle />
    <DashBoardMap />
    <DashBoardBoard />
  </DashBoardLayout>
</template>

<script setup>
import DashBoardLayout from "../layout/DashBoardLayout";
import DashBoardMap from "../components/DashBoard/DashBoardMap";
import DashBoardTitle from "../components/DashBoard/DashBoardTitle";
import DashBoardToggle from "../components/DashBoard/DashBoardToggle";
import DashBoardBoard from "../components/DashBoard/DashBoardBoard";
</script>

<style lang="scss" scoped></style>
