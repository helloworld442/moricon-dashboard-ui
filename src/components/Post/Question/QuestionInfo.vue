<template>
  <div class="question-info-box">
    <h5 class="info-box-date">2022.12.05</h5>
    <div class="info-box-buttons">
      <span class="info-box-heart"><Heart /> 저도 궁금해요 </span>
      <span class="info-box-button" @click.prevent="onToggleButton">
        <Pen /> 답변하기
      </span>
    </div>
  </div>
  <QuestionForm :active="active" />
</template>

<script setup>
import { ref } from "vue";
import Heart from "../../../assets/icons/Heart";
import QuestionForm from "./QuestionForm";

const active = ref(false);

function onToggleButton() {
  active.value = !active.value;
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.question-info-box {
  position: relative;
  width: 100%;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-box-date {
  font-size: 0.825rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: #888;
}

.info-box-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-box-heart {
  right: 120px;
  height: 46px;
  padding: 12px 14px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-family: "Noto Sans KR";
  font-size: 0.85rem;
  color: #bbb;
  cursor: pointer;

  svg {
    margin-top: 1px;
    margin-right: 12px;
    width: 1.2rem;
    height: 1.2rem;
    fill: #bbb;
  }

  &:hover {
    opacity: 0.8;
  }
}

.info-box-button {
  height: 46px;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-family: "Noto Sans KR";
  font-size: 0.875rem;
  color: #fff;
  background: $main-color-dark;
  cursor: pointer;

  svg {
    margin-top: 1px;
    margin-right: 12px;
    width: 0.95rem;
    height: 0.95rem;
    fill: #fff;
  }

  &:hover {
    opacity: 0.9;
  }
}
</style>
