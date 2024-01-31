<template>
  <div class="issue-form-box">
    <button class="form-button" @click="updateActive" :class="{ active }">
      <Plus /> <b>이슈 만들기</b>
    </button>
    <form
      class="form-content"
      :class="{ active }"
      @submit.prevent="onSubmitFiled"
    >
      <input placeholder="내용을 입력하고 ENTER 키를 눌러주세요" />
    </form>
    <div class="form-overlay" :class="{ active }" @click="updateActive" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Plus from "../../../assets/icons/Plus";

const active = ref(false);

function updateActive() {
  active.value = !active.value;
}

function onSubmitFiled() {
  updateActive();
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.issue-form-box {
  width: 100%;
  margin: 4px 0;
}

.form-button {
  width: 100%;
  padding: 12px 6px;
  border: none;
  border-radius: 3px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  opacity: 0;

  svg {
    margin-right: 4px;
    width: 1.15rem;
    height: 1.15rem;
  }

  b {
    margin-top: 2px;
    font-size: 0.75rem;
    font-weight: 550;
    color: #333;
  }

  &:hover {
    opacity: 1;
    background: #e6e6e6;
  }

  &.active {
    display: none;
  }
}

.form-content {
  position: relative;
  width: 100%;
  display: none;
  z-index: 50;

  input {
    width: 100%;
    padding: 12px 6px;
    box-sizing: border-box;
    border: 1.5px solid $background-color-0;
    border-radius: 3px;
    outline: none;
    font-size: 0.775rem;
    font-weight: 550;
    color: #333;
  }

  &.active {
    display: inline-block;
  }
}

.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: none;
  z-index: 2;

  &.active {
    display: inline-block;
  }
}
</style>
