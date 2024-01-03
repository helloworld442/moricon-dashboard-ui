<template>
  <ul class="post-more-list">
    <h2 class="post-more-list-title">다른 게시글</h2>
    <li class="post-more-item" v-for="post in posts">
      <PostMoreItem :title="post.title" :id="post.id" />
    </li>
  </ul>
</template>

<script setup>
import PostMoreItem from "./PostMoreItem";
import { getPosts } from "../../../apis/posts";
import useFetch from "../../../composable/useFetch";

const { data: posts, error, loader } = useFetch(getPosts);

await loader();
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.post-more-list {
  width: 100%;
  margin-top: 6px;
}

.post-more-list-title {
  margin: 12px 0;
  font-size: 0.825rem;
  font-weight: 400;
  color: #333;

  @include tablet {
    margin: 24px 0;
    font-size: 1.1rem;
    font-weight: 550;
  }
}

.post-more-item {
  padding: 18px 12px;
  box-sizing: border-box;
  border: 1px solid #d7e0e6;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 1.5px solid $main-color-dark;
  }

  & + & {
    margin: 14px 0;
  }

  @include tablet {
    & + & {
      margin: 24px 0;
    }
  }
}
</style>
