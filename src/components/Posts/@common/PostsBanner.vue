<template>
  <div class="posts-banner">
    <div class="info">
      <h3 class="title">
        궁금한 점들이 많으시다구요?<br />그렇다면 지금 커뮤니티의 첫 주인공이
        되어보세요
      </h3>
      <h3 class="link" @click="onLinkButton">지금 바로 질문하러 가기</h3>
    </div>
    <div class="icon">
      <Earth />
    </div>
  </div>
</template>

<script setup>
import Earth from "../../../assets/icons/Earth";

function onLinkButton() {
  window.location.href = "/write";
}
</script>

<style lang="scss" scoped>
.posts-banner {
  width: 100%;
  height: 130px;
  padding: 24px;
  margin: 18px 0;
  box-sizing: border-box;
  border-radius: 4px;
  background: #f9f7e8;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    margin-bottom: 4px;
    .title {
      font-size: 0.9rem;
      font-weight: 550;
      font-family: "Noto Sans KR";
      line-height: 140%;
      letter-spacing: -0.8px;
      color: #666;
    }

    .link {
      margin-top: 12px;
      font-size: 0.775rem;
      font-weight: 550;
      font-family: "Noto Sans KR";
      line-height: 140%;
      letter-spacing: -0.8px;
      color: #61bfad;
      cursor: pointer;
    }
  }

  .icon {
    svg {
      width: 96px;
      height: 96px;
      fill: #61bfad;
    }
  }
}
</style>
