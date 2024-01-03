<template>
  <ul class="posts-category-menu">
    <li
      class="posts-category-item"
      :class="{ active: $route.path.includes('all') }"
    >
      <a :href="location('/all')">전체</a>
    </li>
    <li
      class="posts-category-item"
      :class="{ active: $route.path.includes('/best') }"
    >
      <a :href="location('/best')">인기 글</a>
    </li>
    <li
      class="posts-category-item"
      :class="{ active: $route.path.includes('/question') }"
    >
      <a :href="location('/question')">Q & A</a>
    </li>
    <li class="posts-category-item">
      <a>나의 활동</a>
    </li>
  </ul>
</template>

<script setup>
import { useRoute } from "vue-router";

const { params } = useRoute();

function location(path) {
  if (params.categoryId === "") {
    return "/posts" + path;
  }

  return "/posts/" + params.categoryId + path;
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.posts-category-menu {
  margin-top: 24px;
  border-bottom: 1px solid $border-color-0;
}

.posts-category-item {
  display: inline-block;
  width: 78px;
  height: 50px;
  margin: 0 6px;
  text-align: center;
  cursor: pointer;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 48px;
    color: $font-color-0;
  }

  &.active {
    border-bottom: 5px solid $main-color-light;
    a {
      color: $main-color-dark;
    }
  }
}
</style>
