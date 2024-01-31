<template>
  <div class="issue-template">
    <IssueSetting />
    <IssueInfo />
    <issueComment />
  </div>
</template>

<script setup>
import IssueInfo from "./IssueInfo";
import IssueSetting from "./IssueSetting";
import issueComment from "./issueComment";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.issue-template {
  position: absolute;
  top: 0;
  right: 0;
  width: 380px;
  height: 100vh;
  background: #fff;
  border-left: 1px solid $border-color-0;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: slideFromRight 0.25s ease-out forwards;
}

@keyframes slideFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
