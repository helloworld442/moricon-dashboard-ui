<template>
  <ul class="post-comment-list">
    <h2 class="comment-list-title">답변 <b>1</b></h2>
    <li class="post-comment-item">
      <CommentItem />
    </li>
  </ul>
</template>

<script>
import CommentItem from "./CommentItem";

export default {
  components: { CommentItem },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.post-comment-list {
  width: 100%;
  margin: 36px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post-comment-item {
  position: relative;
  width: 100%;
  min-height: 200px;
  padding: 24px 20px;
  box-sizing: border-box;
  border: 1px solid $border-color-1;
  border-radius: 4px;
}

.comment-list-title {
  margin: 6px 0;
  font-size: 1.1rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;

  b {
    margin-left: 4px;
    color: $main-color-dark;
  }
}
</style>
