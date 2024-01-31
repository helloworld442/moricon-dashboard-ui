<template>
  <div class="issue-comment">
    <h3 class="comment-title">댓글 <b>0</b></h3>
    <ul class="comment-list">
      <div class="not-comment-box">
        <Comment />
        <b>작성된 댓글이 없습니다.</b>
      </div>
    </ul>
    <form class="comment-form">
      <input v-model="comment" placeholder="댓글을 입력해주세요" />
      <button :disabled="disabled"><Plane /></button>
    </form>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Comment from "../../../assets/icons/Comment";
import Plane from "../../../assets/icons/Plane";

const comment = ref("");

const disabled = computed(() => {
  return !Boolean(comment.value.length);
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.issue-comment {
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.comment-title {
  font-size: 0.975rem;
  font-weight: 650;
  color: #333;

  b {
    color: $background-color-0;
  }
}

.comment-list {
  position: relative;
  width: 100%;
  height: 300px;
  margin: 12px 0;
}

.not-comment-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    margin-bottom: 12px;
    width: 4rem;
    height: 4rem;
    fill: #dfdfdf;
  }

  b {
    font-size: 0.825rem;
    font-weight: 400;
    color: #888;
  }
}

.comment-form {
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
  border: 1px solid $border-color-0;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    padding: 0;
    border: none;
    outline: none;
    font-size: 0.825rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #333;
  }

  button {
    position: relative;
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 50%;
    color: #fff;
    background: $background-color-0;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      transform: translate(-50%, -50%);
    }

    &:disabled {
      color: #fff;
      background: $background-color-5;
    }
  }
}
</style>
