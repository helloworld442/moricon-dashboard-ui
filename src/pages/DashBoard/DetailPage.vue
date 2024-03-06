<template>
  <BoardDetailTemplate>
    <BoardDetailHead />
    <BoardDetailInfo />
    <BoardDetailSensor />
    <BoardDetailGraph />
  </BoardDetailTemplate>
</template>

<script setup>
import BoardDetailTemplate from "../../components/DashBoard/BoardDetail/BoardDetailTemplate";
import BoardDetailHead from "../../components/DashBoard/BoardDetail/BoardDetailHead";
import BoardDetailInfo from "../../components/DashBoard/BoardDetail/BoardDetailInfo";
import BoardDetailSensor from "../../components/DashBoard/BoardDetail/BoardDetailSensor";
import BoardDetailGraph from "../../components/DashBoard/BoardDetail/BoardDetailGraph";
</script>

<style lang="scss" scoped></style>
