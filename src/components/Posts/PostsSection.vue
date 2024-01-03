<template>
  <section class="posts-section">
    <PostsSearch />
    <PostsCategory />
    <RouterView />
  </section>
</template>

<script setup>
import PostsSearch from "./@common/PostsSearch";
import PostsCategory from "./@common/PostsCategory";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.posts-section {
  width: 700px;

  @include tablet {
    width: 100%;
  }
}
</style>
