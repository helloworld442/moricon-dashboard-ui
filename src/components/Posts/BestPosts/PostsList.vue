<template>
  <ul class="best-posts-list">
    <li class="best-posts-item" v-for="(post, index) in posts">
      <PostsItem v-bind="post" :index="index" />
    </li>
  </ul>
</template>

<script setup>
import PostsItem from "./PostsItem";

const props = defineProps(["posts"]);
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.best-posts-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

.best-posts-item {
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
