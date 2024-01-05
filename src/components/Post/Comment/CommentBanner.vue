<template>
  <div class="comment-banner">
    <div class="info">
      <h3 class="title">
        지금 답을 알고계신다구요?<br />그렇다면 지금 바로 답변을 남기고 포인트를
        받아가세요!
      </h3>
      <h3 class="link" @click="onToggleActive">
        지금 바로 답변하러 가기 <ArrowRight />
      </h3>
    </div>
    <div class="icon">
      <Earth />
    </div>
  </div>
</template>

<script setup>
import Earth from "../../../assets/icons/Earth";
import ArrowRight from "../../../assets/icons/ArrowRight";
import { inject } from "vue";

const { onToggleActive } = inject("activeModule");
</script>

<style lang="scss" scoped>
.comment-banner {
  width: 100%;
  height: 130px;
  padding: 24px;
  margin: 36px 0;
  box-sizing: border-box;
  border-radius: 4px;
  background: #e3e3e3;
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
      color: #555;
    }

    .link {
      margin-top: 12px;
      font-size: 0.775rem;
      font-weight: 550;
      font-family: "Noto Sans KR";
      line-height: 140%;
      letter-spacing: -0.8px;
      color: #a28276;
      cursor: pointer;

      svg {
        position: relative;
        top: 1.5px;
        left: 2px;
        width: 0.775rem;
        height: 0.775rem;
        fill: #a28276;
      }
    }
  }

  .icon {
    svg {
      width: 96px;
      height: 96px;
      fill: #a28276;
    }
  }
}
</style>
