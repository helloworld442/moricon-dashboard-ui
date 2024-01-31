<template>
  <section class="issue-list-box">
    <IssueList label="할 일" />
    <IssueList label="진행 중" />
    <IssueList label="완료" />
  </section>
</template>

<script setup>
import IssueList from "./IssueList";
</script>

<style lang="scss" scoped>
.issue-list-box {
  width: 100%;
  padding: 24px 36px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  gap: 16px;
}
</style>
