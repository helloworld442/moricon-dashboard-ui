<template>
  <header class="header">
    <nav class="header-nav">
      <a class="nav-link" @click="$router.go(-1)">
        <Arrowleft class="icon" /> 이전으로
      </a>
    </nav>
  </header>
</template>

<script setup>
import Arrowleft from "../../assets/icons/ArrowLeft";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.header {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background: #fff;
  border-bottom: 1px solid $border-color-0;
}

.header-nav {
  width: 1150px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  font-size: 1rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: #333;
  display: flex;
  align-items: center;
  cursor: pointer;

  .icon {
    margin-right: 8px;
    width: 1.35rem;
    height: 1.35rem;
    fill: #333;
  }

  &:hover {
    color: $main-color-dark;

    .icon {
      fill: $main-color-dark;
    }
  }
}
</style>
