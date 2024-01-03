<template>
  <div class="write-head-box">
    <h1 class="write-head-title">
      <span class="tag">글 남기기</span>
      궁금했던 점들을 남기고
      <br />
      다양한 개발자들에게 컨펌받아 보세요!
    </h1>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.write-head-box {
  margin: 36px 0;
}

.write-head-title {
  font-size: 1.65rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;
  line-height: 3rem;
  display: flex;
  flex-direction: column;
  text-align: left;

  .tag {
    height: 36px;
    font-size: 0.825rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: $main-color-light;
  }
}
</style>
