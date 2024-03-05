<template>
  <header class="dashboard-header">
    <nav class="header-nav">
      <div class="nav-logo"><Logo /> <b>SAFE SITE PRO</b></div>
      <ul class="nav-menu">
        <li class="nav-item active"><Home /> <b>DashBoard</b></li>
        <li class="nav-item"><Monitor /> <b>Monitoring</b></li>
        <li class="nav-item"><Process /> <b>Processing</b></li>
        <li class="nav-item"><Report /> <b>Result Report</b></li>
      </ul>
      <div class="nav-user"></div>
    </nav>
  </header>
</template>

<script setup>
import Logo from "../../assets/icons/Logo";
import Home from "../../assets/icons/Home";
import Monitor from "../../assets/icons/Monitor";
import Process from "../../assets/icons/Process";
import Report from "../../assets/icons/Report";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.dashboard-header {
  width: 224px;
  height: 100%;

  padding: 36px 20px;
  padding-right: 4px;
  box-sizing: border-box;
}

.header-nav {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 54px;
}

.nav-logo {
  padding: 0 12px;
  box-sizing: border-box;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  svg {
    width: 24px;
    height: 24px;
    fill: #454b6a;
  }

  b {
    margin-top: 2px;

    font-size: 0.95rem;
    font-weight: 800;
    font-family: "Montserrot", sans-serif;
    color: #454b6a;
  }
}

.nav-menu {
  width: 100%;

  padding: 0;
  margin: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.nav-item {
  width: 100%;

  padding: 15px 14px;
  box-sizing: border-box;

  border-radius: 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  svg {
    width: 17px;
    height: 17px;
    stroke: #454b6a;
    stroke-width: 2;
  }

  b {
    font-size: 0.775rem;
    font-weight: 450;
    font-family: "Noto Sans KR";
    color: #454b6a;
  }

  &.active {
    svg {
      stroke: #f4f5f8;
    }

    b {
      color: #f4f5f8;
    }

    background: #454b6a;
  }
}
</style>
