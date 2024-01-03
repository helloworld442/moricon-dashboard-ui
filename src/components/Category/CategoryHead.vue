<template>
  <div class="category-head">
    <h1 class="category-head-title">
      <b>카테고리</b>
      개발자들 사이에서 중요한 코드리뷰의
      <br />
      카테고리를 소개합니다.
    </h1>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.category-head {
  margin: 36px 0;
  text-align: center;
}

.category-head-title {
  font-size: 2.15rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;
  line-height: 3.5rem;
  display: flex;
  flex-direction: column;

  b {
    height: 48px;
    font-size: 0.95rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: $background-color-5;
  }

  @include tablet {
    font-size: 1.8rem;

    b {
      font-size: 0.825rem;
    }
  }
}
</style>
