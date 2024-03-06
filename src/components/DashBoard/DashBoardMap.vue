<template>
  <div class="dashboard-map">
    <GMapMap
      :center="{ lat: 36.484603399491, lng: 127.25126722279 }"
      :options="mapOptions"
      :zoom="zoom"
      style="width: 100%; height: 100%"
    />
    <div class="map-zoom-controller">
      <span class="zoom-controller" @click="onPlusZoom"><Plus /></span>
      <span class="zoom-controller" @click="onMinusZoom"><Minus /></span>
    </div>
  </div>
</template>

<script setup>
import Plus from "../../assets/icons/Plus";
import Minus from "../../assets/icons/Minus";

import useZoom from "../../hooks/useZoom";
import mapOptions from "../../utils/mapOptions";

const [zoom, onPlusZoom, onMinusZoom] = useZoom(15);
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.dashboard-map {
  position: relative;
  width: 100%;
  height: 100%;
}

.map-zoom-controller {
  position: absolute;
  bottom: 24px;
  right: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  .zoom-controller {
    padding: 8px;
    box-sizing: border-box;

    border: 1.5px solid $border-color-0;
    border-radius: 3px;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 24px;
      height: 24px;
      stroke-width: 2;
    }
  }
}
</style>
