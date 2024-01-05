<template>
  <div class="posts-error">
    <img :src="notFound" class="error-img" alt="error" />
    <h3 class="error-title">Not Found</h3>
    <h5 class="error-desc">
      페이지를 불러오는데 실패했습니다.<br />하단의 버튼을 통해서 다시
      시도해주세요
    </h5>
    <button class="error-button" @click="onReloadPage">다시 시도</button>
  </div>
</template>

<script setup>
import notFound from "../../../assets/image/not-found.webp";

function onReloadPage() {
  window.location.reload();
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.posts-error {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.error-img {
  position: relative;
  top: -12px;
  width: 320px;
  height: 350px;
}

.error-title {
  position: relative;
  top: -48px;
  font-size: 1.35rem;
  font-weight: 450;
  font-family: "Noto Sans KR";
  color: #555;
}

.error-desc {
  position: relative;
  top: -36px;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  line-height: 1.2rem;
  text-align: center;
  color: #888;
}

.error-button {
  width: 120px;
  height: 44px;
  padding: 10px 16px;
  box-sizing: border-box;
  border: 1px solid $border-color-1;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
  font-size: 0.825rem;
  font-weight: 650;
  color: #333;
  background: #fff;
  cursor: pointer;

  &:hover {
    border: 1px solid $main-color-dark;
    color: $main-color-dark;
  }
}
</style>
