<template>
  <header class="header">
    <nav class="header-nav">
      <a class="nav-logo">별무리</a>

      <ul class="nav-menu">
        <a>카테고리</a>
        <a @click="$router.push('/posts/all')">커뮤니티</a>
        <a>글 남기기</a>
        <a>F & A</a>
      </ul>

      <a class="nav-icon"><User /></a>
    </nav>
  </header>
</template>

<script setup>
import User from "../../assets/icons/User";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.header {
  width: 100%;
  height: auto;
}

.header-nav {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: "Jua";
  color: $main-color-light;
  cursor: pointer;
}

.nav-menu {
  display: flex;
  gap: 36px;
  font-size: 0.825rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  a:hover {
    color: $main-color-light;
  }
}

.nav-icon {
  display: inline-block;

  svg {
    width: 1.05rem;
    height: 1.05rem;
  }
}
</style>
