<template>
  <header class="dashboard-header">
    <h3 class="header-title">
      <p>KOREA</p>
      SEJONG SAROM TOWN
    </h3>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.dashboard-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 80px;
  padding: 20px 36px;
  box-sizing: border-box;
}

.header-title {
  padding: 0;
  margin: 0;
  font-size: 1.45rem;
  font-family: "Montserrat", "Noto Sans KR";
  font-weight: 650;
  color: #333;
  letter-spacing: 1px;

  p {
    font-size: 0.65rem;
    font-weight: 550;
    font-family: "Montserrat", "Noto Sans KR";
    padding: 0;
    margin: 0;
    margin-bottom: 4px;
  }
}
</style>
