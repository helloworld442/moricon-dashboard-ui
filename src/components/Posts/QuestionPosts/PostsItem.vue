<template>
  <RouterLink class="posts-item-title" :to="location">{{ title }}</RouterLink>

  <h5 class="posts-item-content">{{ content }}</h5>

  <div class="posts-item-user">
    <span class="item-user-profile"></span>
    <h4 class="item-user-name">김민승</h4>
    <h5 class="item-user-date">2023.8.12</h5>
  </div>

  <div class="posts-item-point">
    <span class="item-point-point">0</span>
    <h5 class="item-point-title">POINT</h5>
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
  width: 70%;
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

.posts-item-point {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 105px;
  height: 105px;
  border: 1px solid $border-color-1;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .item-point-point {
    font-size: 1.8rem;
    font-weight: 300;
    font-family: "Jua";
    color: $main-color-dark;
  }

  .item-point-title {
    font-size: 0.65rem;
    font-weight: 650;
    font-family: "Noto Sans KR";
    color: #333;
  }
}
</style>
