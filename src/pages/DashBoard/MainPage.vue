<template>
  <DashBoardLayout>
    <DashBoardHeader />
    <DashBoardWidget />
    <RouterView />
    <DashBoardMap />
  </DashBoardLayout>
</template>

<script setup>
import DashBoardLayout from "../../layout/DashBoardLayout";
import DashBoardHeader from "../../components/DashBoard/DashBoardHeader";
import DashBoardWidget from "../../components/DashBoard/BoardWidget/BoardWidgetTemplate";
import DashBoardMap from "../../components/DashBoard/DashBoardMap";
</script>

<style lang="scss" scoped></style>
