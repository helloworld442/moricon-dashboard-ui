<template>
  <header class="dashboard-header">
    <nav class="header-nav">
      <div class="nav-logo">
        <Logo />
      </div>
      <ul class="nav-menu">
        <li class="nav-item">
          <RouterLink to="/dashboard/list">
            <List />
            <b>목록</b>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/dashboard/link">
            <Monitor />
            <b>모니터링</b>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/dashboard/link">
            <Process />
            <b>프로세스</b>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/dashboard/link">
            <Report />
            <b>보고서</b>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/dashboard/link">
            <Setting />
            <b>설정</b>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import List from "../../assets/icons/List";
import Logo from "../../assets/icons/Logo";
import Report from "../../assets/icons/Report";
import Monitor from "../../assets/icons/Monitor";
import Process from "../../assets/icons/Process";
import Setting from "../../assets/icons/Setting";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.dashboard-header {
  flex: 1 0 85px;
  height: 100%;

  padding: 24px 0;
  box-sizing: border-box;

  border-right: 1px solid $border-color-0;
}

.header-nav {
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.nav-logo {
  svg {
    width: 30px;
    height: 30px;
    fill: #5e6ad7;
  }
}

.nav-menu {
  padding: 0;
  margin: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.nav-item {
  width: 100%;
  height: 100%;

  a {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-decoration: none;
  }

  svg {
    width: 28px;
    height: 28px;
    stroke: #444;
  }
  b {
    display: block;

    margin-top: 2px;

    font-size: 0.7rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #666;
  }
}
</style>
