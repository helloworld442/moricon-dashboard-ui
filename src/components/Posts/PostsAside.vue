<template>
  <aside class="posts-aside">
    <PostsCarousel />
  </aside>
</template>

<script setup>
import PostsCarousel from "./@common/PostsCarousel";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.posts-aside {
  width: 310px;

  @include tablet {
    width: 100%;
  }
}
</style>
