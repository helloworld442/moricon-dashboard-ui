<template>
  <section class="issue-head">
    <h2 class="issue-head-title">팀스파르타 항해99 과제 계획서</h2>
    <h4 class="issue-head-desc">
      항해99 주특기 주차<br />매주 진행되는 시험과 관련된 계획서 입니다.
    </h4>
    <!-- <div class="issue-head-user">
      <span class="profile"></span>
      <span class="profile"></span>
      <span class="profile"></span>
    </div> -->
    <div class="issue-head-info">
      <h4 class="info-date">2023.08.24 ~ 2023.08.30</h4>
      <span class="info-item"><Date /> 날짜</span>
      <span class="info-item"><List /> 보기</span>
    </div>
  </section>
</template>

<script setup>
import Date from "../../assets/icons/Date";
import List from "../../assets/icons/List";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.issue-head {
  position: relative;
  width: 100%;
  padding: 24px 36px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid $border-color-0;
}

.issue-head-title {
  margin-bottom: 10px;
  font-size: 1.25rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;
}

.issue-head-desc {
  font-size: 0.75rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: $font-color-0;
  line-height: 1.1rem;
}

.issue-head-user {
  margin-top: 36px;
  display: flex;
  gap: 4px;

  .profile {
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #d9d9d9;
  }
}

.issue-head-info {
  position: absolute;
  bottom: 12px;
  right: 64px;
  display: flex;
  align-items: center;

  .info-item {
    width: 54px;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.825rem;
    font-weight: 550;
    color: $font-color-0;
    cursor: pointer;

    svg {
      width: 22px;
      height: 22px;
      margin-top: 2px;
      margin-right: 4px;
      stroke: $font-color-0;
    }
  }

  .info-date {
    margin-right: 24px;
    font-size: 0.825rem;
    font-weight: 400;
    color: $font-color-0;
  }
}
</style>
