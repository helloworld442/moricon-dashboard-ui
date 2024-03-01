<template>
  <div class="dashboard-board" :class="classObject">
    <section class="board-section-status">
      <CheckBoardStatusUI />
      <WorkBoardStatusUI />
    </section>

    <section class="board-section-scene">
      <ErrorBoardStatusUI />
    </section>

    <button
      class="board-move-button"
      :class="classObject"
      @click="onToggleButton"
    >
      <ArrowRight />
    </button>
  </div>
</template>

<script setup>
import ErrorBoardStatusUI from "./BoardUI/ErrorBoardStatusUI";
import CheckBoardStatusUI from "./BoardUI/CheckBoardStatusUI";
import WorkBoardStatusUI from "./BoardUI/WorkBoardStatusUI";
import ArrowRight from "../../assets/icons/ArrowRight";
import { computed, ref } from "vue";

const active = ref(false);

const classObject = computed(() => {
  return { disabled: !active.value };
});

function onToggleButton() {
  active.value = !active.value;
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.dashboard-board {
  position: absolute;
  top: 50%;
  right: 36px;

  width: 635px;
  height: 724px;
  padding: 18px 30px;
  box-sizing: border-box;
  border: 1px solid $border-color-0;
  border-radius: 5px;
  background: #fff;
  transform: translateY(-50%);
  transition: all 1s ease-in-out;
  z-index: 100;

  &.disabled {
    transform: translate(660px, -50%);
  }
}

.board-section-status {
  position: relative;
  width: 100%;
  height: 230px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 96px;

  border-bottom: 1px solid $border-color-0;
}

.board-section-scene {
  position: relative;
  width: 100%;
  height: 250px;

  margin-top: 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
}

.board-move-button {
  position: absolute;
  top: 50%;
  left: -40px;
  transform: translateY(-50%);

  padding: 20px 6px;
  box-sizing: border-box;

  border: 1px solid $border-color-0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  background: #fff;

  cursor: pointer;

  svg {
    width: 26px;
    height: 26px;
    transform: rotate(-180deg);
    transition: all 1s ease-in-out;
  }

  &.disabled {
    svg {
      transform: rotate(0deg);
    }
  }
}
</style>
