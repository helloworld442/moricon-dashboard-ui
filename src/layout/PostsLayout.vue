<template>
  <div class="post-layout">
    <PostHeader />
    <PostsTemplate>
      <PostsSection />
      <PostsAside />
    </PostsTemplate>
  </div>
</template>

<script setup>
import PostHeader from "../components/Header/PostHeader.vue";
import PostsAside from "../components/Posts/PostsAside.vue";
import PostsSection from "../components/Posts/PostsSection";
import PostsTemplate from "../components/Posts/PostsTemplate";
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.post-layout {
  position: relative;
  left: 50%;
  width: 100%;
  height: auto;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @include tablet {
    width: 100%;
    padding: 0 10vw;
    box-sizing: border-box;
  }
}
</style>
