<template>
  <BoardListTemplate>
    <BoardListHead />
    <BoardListCore />
  </BoardListTemplate>
  <RouterView />
</template>

<script setup>
import BoardListTemplate from "../../components/DashBoard/BoardList/BoardListTemplate";
import BoardListHead from "../../components/DashBoard/BoardList/BoardListHead";
import BoardListCore from "../../components/DashBoard/BoardList/BoardListCore";
</script>

<style lang="scss" scoped></style>
