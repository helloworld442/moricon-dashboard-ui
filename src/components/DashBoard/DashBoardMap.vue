<template>
  <div class="dashboard-map-container">
    <GMapMap
      class="dashboard-map"
      :center="{ lat: 36.484603399491, lng: 127.25126722279 }"
      :options="mapOptions"
      :zoom="zoom"
      style="width: 100vw; height: 100vh"
    >
      <GMapMarker
        :icon="require('../../assets/image/MarkerRed.png').default"
        :position="{ lat: 36.485046545941, lng: 127.25159115688 }"
      />
    </GMapMap>
    <div class="dashboard-zoom">
      <span class="zoom-icon" @click="onPlusZoom"><Plus /></span>
      <span class="zoom-icon" @click="onMinusZoom"><Minus /></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Minus from "../../assets/icons/Minus";
import Plus from "../../assets/icons/Plus";

import mapOptions from "../../utils/mapOptions";

const zoom = ref(14);

function onPlusZoom() {
  zoom.value++;
}

function onMinusZoom() {
  zoom.value--;
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.dashboard-map-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.dashboard-map {
  width: 100%;
  height: 100%;
}

.dashboard-zoom {
  position: absolute;
  top: 100px;
  right: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  .zoom-icon {
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
  }
}
</style>
