<template>
  <li class="board-list-item">
    <div class="item-status"><span /> <b>위험 상태</b></div>
    <h3 class="item-title">{{ title }}</h3>
    <h5 class="item-structure">당진공사</h5>
    <div class="item-participant"><b>관리부서</b> R&BD 팀</div>
    <div class="item-picture">
      <NoImage />
    </div>
  </li>
</template>

<script setup>
import NoImage from "../../../assets/icons/NoImage";

const props = defineProps(["title"]);
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.board-list-item {
  position: relative;
  width: 100%;
  height: 120px;

  padding: 0 24px;
  box-sizing: border-box;

  border-bottom: 0.5px solid $border-color-0;

  & + & {
    margin-top: 16px;
  }
}

.item-status {
  margin-top: 12px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;

    border-radius: 50%;
    background: #d9434e;
  }

  b {
    margin-bottom: 1px;

    font-size: 0.7rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #d9434e;
  }
}

.item-title {
  padding: 0;
  margin: 0;
  margin-top: 6px;

  font-size: 0.9rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: #444;

  cursor: pointer;

  &:hover {
    color: #5e6ad7;
  }
}

.item-structure {
  padding: 0;
  margin: 0;

  font-size: 0.7rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: #777;
}

.item-participant {
  margin-top: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;

  b {
    font-size: 0.675rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: #444;
  }

  font-size: 0.7rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: #777;
}

.item-picture {
  position: absolute;
  top: 0px;
  right: 32px;

  width: 100px;
  height: 100px;

  border: 1.5px solid $border-color-0;
  border-radius: 6px;
  background-color: #f0f0f0;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 80px;
    height: 80px;
    fill: #aaaaaa;
  }
}
</style>
