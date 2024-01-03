<template>
  <div class="question-title-box">
    <input class="question-title-input" disabled :value="title" />
    <Ellipsis class="question-title-icon" />
    <div class="question-title-info">
      <h6 class="title">추천 <b>1</b></h6>
      <h6 class="title">조회 <b>1</b></h6>
    </div>
  </div>
</template>

<script>
import Ellipsis from "../../../assets/icons/Ellipsis";

export default {
  components: { Ellipsis },

  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.question-title-box {
  position: relative;
  margin-bottom: 20px;
  border-bottom: 1px solid $border-color-1;
}

.question-title-input {
  width: 650px;
  margin-top: 6px;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Noto Sans KR";

  &:disabled {
    border: none;
    outline: none;
    background: #fff;
    color: #333;
  }

  &:enabled {
    margin-bottom: 3px;
    border: none;
    outline: 3px dashed $main-color-dark;
    background: #fefefe;
    color: #444;
  }
}

.question-title-icon {
  position: absolute;
  top: 12px;
  right: 0;
  width: 1.2rem;
  height: 1.2rem;
  fill: $main-color-dark;
  cursor: pointer;
}

.question-title-info {
  padding-top: 12px;
  padding-bottom: 20px;
  display: flex;
  gap: 8px;

  .title {
    font-size: 0.75rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: $font-color-1;
  }

  b {
    display: inline-block;
    margin-left: 2px;
    color: $main-color-dark;
  }
}
</style>
