<template>
  <ul class="posts-skeleton-list">
    <li class="posts-skeleton-item">
      <h3 class="skeleton-item-title" />
      <h5 class="skeleton-item-content" />
      <span class="skeleton-item-user" />
      <span class="skeleton-item-info" />
    </li>

    <li class="posts-skeleton-item">
      <h3 class="skeleton-item-title" />
      <h5 class="skeleton-item-content" />
      <span class="skeleton-item-user" />
      <span class="skeleton-item-info" />
    </li>

    <li class="posts-skeleton-item">
      <h3 class="skeleton-item-title" />
      <h5 class="skeleton-item-content" />
      <span class="skeleton-item-user" />
      <span class="skeleton-item-info" />
    </li>
  </ul>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.posts-skeleton-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

.posts-skeleton-item {
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

.skeleton-item-title {
  display: inline-block;
  width: 80%;
  height: 26px;
  margin-bottom: 8px;
  border-radius: 2px;
  animation: skeleton-gradient 1.8s infinite ease-in-out;
}

.skeleton-item-content {
  width: 80%;
  height: 48px;
  border-radius: 2px;
  animation: skeleton-gradient 1.8s infinite ease-in-out;
}

.skeleton-item-user {
  position: absolute;
  bottom: 30px;
  display: inline-block;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  animation: skeleton-gradient 1.8s infinite ease-in-out;
}

.skeleton-item-info {
  position: absolute;
  bottom: 30px;
  right: 0;
  width: 96px;
  height: 26px;
  border-radius: 2px;
  animation: skeleton-gradient 1.8s infinite ease-in-out;
}

@keyframes skeleton-gradient {
  0% {
    background-color: rgba(165, 165, 165, 0.2);
  }

  50% {
    background-color: rgba(165, 165, 165, 0.1);
  }

  100% {
    background-color: rgba(165, 165, 165, 0.2);
  }
}
</style>
