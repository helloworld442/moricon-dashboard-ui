<template>
  <RouterLink class="posts-item-title" :to="location">{{ title }}</RouterLink>

  <h5 class="posts-item-content">{{ content }}</h5>

  <div class="posts-item-user">
    <span class="item-user-profile"></span>
    <h4 class="item-user-name">김민승</h4>
    <h5 class="item-user-date">2023.8.12</h5>
  </div>

  <div class="posts-item-info">
    <h6 class="item-info-content">추천 <b>0</b></h6>
    <h6 class="item-info-content">조회 <b>0</b></h6>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  id: String,
  title: String,
  content: String,
});

const location = computed(() => {
  return "/post/" + props.id;
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.posts-item-title {
  display: inline-block;
  width: 80%;
  margin-bottom: 8px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 550;
  font-size: 15px;
  color: $font-color-1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    color: $main-color-dark;
    cursor: pointer;
  }
}

.posts-item-content {
  width: 80%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 0.725rem;
  color: $font-color-2;
  line-height: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.posts-item-user {
  position: absolute;
  bottom: 30px;
  display: flex;
  align-items: center;

  .item-user-profile {
    display: inline-block;
    width: 26px;
    height: 26px;
    margin-right: 8px;
    border-radius: 100%;
    background: #d9d9d9;
  }

  .item-user-name {
    margin-bottom: 2px;
    font-size: 0.75rem;
    font-weight: 500;
    font-family: "Noto Sans KR";
  }

  .item-user-date {
    padding-left: 6px;
    margin-left: 6px;
    margin-bottom: 2px;
    border-left: 1.5px solid $border-color-2;
    font-size: 0.725rem;
    font-weight: 500;
    font-family: "Noto Sans KR";
    color: $font-color-0;
  }
}

.posts-item-info {
  position: absolute;
  bottom: 40px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 12px;

  .item-info-content {
    font-size: 0.725rem;
    font-weight: 500;
    font-family: "Noto Sans KR";
    color: $font-color-0;
  }

  b {
    color: $main-color-dark;
  }
}
</style>
