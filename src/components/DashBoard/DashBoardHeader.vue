<template>
  <header class="dashboard-header">
    <nav class="header-nav">
      <div class="nav-logo">
        <Logo />
      </div>
      <ul class="nav-menu">
        <li class="nav-item">
          <List />
          <b>목록</b>
        </li>
        <li class="nav-item">
          <Filter />
          <b>필터</b>
        </li>
        <li class="nav-item">
          <User />
          <b>내정보</b>
        </li>
        <li class="nav-item">
          <Gear />
          <b>세팅</b>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import Logo from "../../assets/icons/Logo";
import List from "../../assets/icons/List";
import User from "../../assets/icons/User";
import Gear from "../../assets/icons/Gear";
import Filter from "../../assets/icons/Filter";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.dashboard-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: 75px;
  height: 100vh;

  border-right: 1px solid $border-color-0;

  background: #fff;
}

.header-nav {
  width: 100%;
  height: 100%;

  padding: 24px 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 36px;
}

.nav-logo {
  width: 100%;
  display: flex;
  justify-content: center;

  svg {
    width: 26px;
    height: 26px;

    padding: 6px;

    border-radius: 8px;

    fill: #4059ad;
    background: #e9edf8;
  }
}

.nav-menu {
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  list-style: none;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    stroke: #444;
  }

  b {
    margin-top: 2px;

    font-size: 0.725rem;
    font-weight: 450;
    font-family: "Noto Sans KR";
    color: #444;
  }
}
</style>
