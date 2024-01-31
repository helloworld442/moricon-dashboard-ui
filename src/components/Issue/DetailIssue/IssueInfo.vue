<template>
  <div class="issue-info">
    <h3 class="info-title">주간 TEST 문제 아이디어</h3>
    <dl class="info-item">
      <dt class="item-label"><Tag /> <b>상태</b></dt>
      <dd class="item-content">상태 선택</dd>
    </dl>
    <dl class="info-item">
      <dt class="item-label"><User /> <b>담당자</b></dt>
      <dd class="item-content">담당자 선택</dd>
    </dl>
    <dl class="info-item">
      <dt class="item-label"><Date /> <b>날짜</b></dt>
      <dd class="item-content">날짜 선택</dd>
    </dl>
    <div
      contenteditable="true"
      class="issue-content"
      aria-readonly="true"
    ></div>
  </div>
</template>

<script setup>
import Date from "../../../assets/icons/Date";
import Tag from "../../../assets/icons/Tag";
import User from "../../../assets/icons/User";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.issue-info {
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  border-bottom: 1px solid $border-color-0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.info-title {
  margin-bottom: 36px;
  font-size: 1.15rem;
  font-weight: 650;
  font-family: "Noto Sans KR";
}

.info-item {
  width: 100%;
  margin-top: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  .item-label {
    width: 64px;
    display: flex;
    align-items: flex-end;

    b {
      margin-bottom: 1.5px;
      margin-left: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      font-family: "Noto Sans KR";
      color: #555;
    }

    svg {
      width: 0.975rem;
      height: 0.975rem;
      stroke: #888;
      stroke-width: 2;
    }
  }

  .item-content {
    width: 72.5%;
    padding: 10px;
    margin-bottom: 1px;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 0.825rem;
    font-weight: 300;
    color: #aaa;
    cursor: pointer;

    &:hover {
      background: $background-color-4;
    }
  }
}

.issue-content {
  margin: 16px 0;
}
</style>
