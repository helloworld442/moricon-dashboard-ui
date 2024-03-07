<template>
  <form class="board-search-widget">
    <input class="search-input" placeholder="장소를 입력하세요" />
    <button class="search-button"><Search /></button>
  </form>
</template>

<script setup>
import Search from "../../../assets/icons/Search";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-search-widget {
  padding: 10px 24px;
  box-sizing: border-box;

  border: 1.5px solid $border-color-0;
  border-radius: 36px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  background-color: #fff;
}

.search-input {
  width: 254px;

  padding: 0;
  margin: 0;
  margin-bottom: 3px;

  border: none;
  outline: none;

  font-size: 0.8rem;
  font-weight: 450;
  font-family: "Noto Sans KR";
  color: #444;
}

.search-button {
  padding: 0;
  margin: 0;
  margin-top: 3px;

  border: none;
  outline: none;

  background-color: #fff;

  svg {
    width: 18px;
    height: 18px;
    stroke-width: 2;
  }
}
</style>
