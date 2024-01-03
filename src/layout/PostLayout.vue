<template>
  <div class="post-layout">
    <PostHeader />
    <PostTemplate>
      <RouterView />
      <PostAside />
    </PostTemplate>
  </div>
</template>

<script setup>
import PostHeader from "../components/Header/PostHeader";
import PostTemplate from "../components/Post/PostTemplate";
import PostAside from "../components/Post/PostAside";
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
