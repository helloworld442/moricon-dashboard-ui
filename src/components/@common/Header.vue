<template>
  <header class="header">
    <nav class="header-nav">
      <div class="nav-logo"></div>
      <ul class="nav-menu">
        <li class="nav-item">
          <Bell />
          <b>notice</b>
        </li>
        <li class="nav-item" @click="onToggleButton" :class="classObject">
          <Folder />
          <b>repo</b>
        </li>
        <li class="nav-item">
          <Users />
          <b>users</b>
        </li>
        <li class="nav-item"></li>
      </ul>
      <div class="nav-user"></div>
    </nav>
    <RepoSideBar :isOpen="isOpen" />
  </header>
</template>

<script setup>
import { computed, ref } from "vue";
import Bell from "../../assets/icons/Bell";
import Folder from "../../assets/icons/Folder";
import Users from "../../assets/icons/User";
import RepoSideBar from "../SideBar/RepoSideBar";

const isOpen = ref(false);

const classObject = computed(() => {
  return { active: isOpen.value };
});

function onToggleButton() {
  isOpen.value = !isOpen.value;
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.header {
  width: auto;
  height: 100vh;
  display: flex;
  border-right: 1px solid $border-color-0;
}

.header-nav {
  width: 110px;
  height: 100%;
  padding: 24px 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  width: 54px;
  height: 54px;
  background: $background-color-0;
  border-radius: 18px;
}

.nav-menu {
  margin: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.nav-item {
  width: 64px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;

  svg {
    width: 27px;
    height: 27px;
    stroke: #888;
  }

  b {
    opacity: 0;
    margin: 4px 0;
    font-size: 0.65rem;
    font-weight: 500;
    color: #888;
  }

  &:hover,
  &.active {
    background: $background-color-1;

    svg {
      fill: $background-color-0;
      stroke: $background-color-0;
    }

    b {
      opacity: 1;
      color: $background-color-0;
    }
  }
}

.nav-user {
  width: 54px;
  height: 54px;
  background: #d9d9d9;
  border-radius: 50%;
}
</style>
