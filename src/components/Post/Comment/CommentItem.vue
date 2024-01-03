<template>
  <div class="comment-item-user">
    <span className="profile"></span>
    <div className="info">
      <h4 className="info-name">김민승</h4>
      <h5 className="info-grade">Javascript , React</h5>
    </div>
  </div>
  <Ellipsis class="comment-item-icon" />
  <pre class="comment-item-content">도움이 많이 됐어용!! 감사합니다!</pre>
  <span class="comment-item-heart"><Heart /> 도움이 됐어요</span>
</template>

<script>
import Heart from "../../../assets/icons/Heart";
import Ellipsis from "../../../assets/icons/Ellipsis";

export default {
  components: { Heart, Ellipsis },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.comment-item-user {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  .profile {
    display: inline-block;
    width: 42px;
    height: 42px;
    background: #d9d9d9;
    border-radius: 50%;
  }

  .info-name {
    margin-bottom: 8px;
    font-size: 0.95rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: #333;
  }

  .info-grade {
    font-size: 0.825rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #444;
  }
}

.comment-item-content {
  margin-top: 24px;
  font-size: 0.925rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: #444;
  line-height: 1.7rem;
}

.comment-item-icon {
  position: absolute;
  top: 30px;
  right: 24px;
  width: 1.05rem;
  height: 1.05rem;
  fill: $main-color-dark;
  cursor: pointer;
}

.comment-item-heart {
  position: absolute;
  bottom: 22px;
  right: 24px;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-family: "Noto Sans KR";
  font-size: 0.875rem;
  color: #bbb;
  cursor: pointer;

  svg {
    margin-right: 12px;
    width: 1.25rem;
    height: 1.25rem;
    fill: #bbb;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
