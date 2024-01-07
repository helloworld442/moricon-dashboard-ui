<template>
  <PostsBanner v-if="isPostsLength" />
  <ul class="question-posts-list" v-else>
    <li class="question-posts-item" v-for="post in posts">
      <PostsItem v-bind="post" />
    </li>
  </ul>
</template>

<script setup>
import PostsBanner from "../@common/PostsBanner";
import PostsItem from "./PostsItem";

const props = defineProps(["posts"]);

const isPostsLength = !props.posts.length;
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.question-posts-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

.question-posts-item {
  position: relative;
  width: 700px;
  height: 190px;
  padding: 30px 0;
  box-sizing: border-box;
  border-bottom: 1px solid $border-color-0;

  @include tablet {
    width: 100%;
  }
}

@keyframes fadeInOutAnimation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
