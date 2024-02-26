<template>
  <div class="dashboard-toggle-info">
    <div class="toggle-menu-user">MIN SEUNG</div>
    <div class="toggle-menu-bell"><Bell /></div>
  </div>
  <div class="dashboard-toggle-block">
    <span class="toggle-icon active"><Map /></span>
    <span class="toggle-icon"><List /></span>
  </div>
</template>

<script setup>
import Bell from "../../assets/icons/Bell";
import List from "../../assets/icons/List";
import Map from "../../assets/icons/Map";
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.dashboard-toggle-info {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  height: 80px;
  padding: 20px 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 36px;
}

.toggle-menu-user {
  margin-bottom: 6px;

  font-size: 0.85rem;
  font-weight: 600;
  font-family: "Montserrat", "Noto Sans KR";
}

.toggle-menu-bell {
  svg {
    width: 20px;
    height: 20px;
    stroke-width: 2;
    stroke: #333;
    fill: #333;
  }
}
.dashboard-toggle-block {
  position: absolute;
  top: 220px;
  right: 36px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  .toggle-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    padding: 10px;
    border: 1px solid $border-color-0;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;

    svg {
      stroke: #333;
      stroke-width: 2.5;
    }

    &.active {
      border: 2px solid $font-color-0;

      svg {
        stroke: $font-color-0;
      }
    }
  }
}
</style>
