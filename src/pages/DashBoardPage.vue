<template>
  <DashBoardLayout>
    <DashBoardHeader />
    <DashBoardMap />
    <DashBoardBoard />
  </DashBoardLayout>
</template>

<script setup>
import DashBoardLayout from "../layout/DashBoardLayout";
import DashBoardMap from "../components/DashBoard/DashBoardMap";
import DashBoardBoard from "../components/DashBoard/DashBoardBoard";
import DashBoardHeader from "../components/DashBoard/DashBoardHeader";
</script>

<style lang="scss" scoped></style>
