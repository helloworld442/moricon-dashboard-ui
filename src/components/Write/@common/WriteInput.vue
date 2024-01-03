<template>
  <div class="write-input-box">
    <label class="write-input-label">{{ label }} <b>*</b></label>
    <input
      class="write-input-input"
      :value="title"
      @input="onInputValue"
      placeholder="제목을 입력하세요"
    />
    <h5 class="write-input-error">{{ error }}</h5>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["label", "title", "error"]);
const emit = defineEmits(["update:title"]);

function onInputValue(event) {
  emit("update:title", event.target.value);
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.write-input-box {
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
}

.write-input-label {
  margin-bottom: 12px;
  font-size: 1.25rem;
  font-weight: 300;
  font-family: "Jua";
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;

  b {
    font-size: 0.925rem;
    color: red;
  }
}

.write-input-input {
  width: 70%;
  height: 56px;
  padding: 0 18px;
  border-radius: 2px;
  border: 1px solid $border-color-1;
  box-sizing: border-box;
  outline: none;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: #333;
  line-height: 60px;

  &::placeholder {
    color: $font-color-0;
  }

  &:focus {
    border: 1px solid $main-color-dark;
  }

  @include tablet {
    width: 100%;
  }
}

.write-input-error {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: red;
}
</style>
