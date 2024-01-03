<template>
  <aside class="post-aside">
    <Suspense>
      <PostMoreList />
    </Suspense>
  </aside>
</template>

<script setup>
import PostMoreList from "./MoreList/PostMoreList";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.post-aside {
  width: 300px;
  float: right;

  @include tablet {
    width: 100%;
  }
}
</style>
