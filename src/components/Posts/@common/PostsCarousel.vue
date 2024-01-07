<template>
  <div class="posts-carousel-box">
    <ul class="posts-carousel-menu">
      <li
        class="posts-carousel-item"
        :style="{
          background: '#98c1ae',
          color: '#1a3834',
          transform: `translateX(-${index * 100}%)`,
        }"
      >
        <h3 class="carousel-item-title">
          코드 리뷰 커뮤니티 별무리
          <br />
          많.관.부!
        </h3>
        <h5 class="carousel-item-description">
          지금 글을 남기고 코드 리뷰를 받아보세요!
        </h5>
      </li>
      <li
        class="posts-carousel-item"
        :style="{
          background: '#f9f7e8',
          color: '#61bfad',
          transform: `translateX(-${index * 100}%)`,
        }"
      >
        <h3 class="carousel-item-title">
          코드 리뷰 커뮤니티 인기글
          <br />
          Hot! Hot!
        </h3>
        <h5 class="carousel-item-description">
          수 많은 분들의 찬사를 받은 인기글입니다.
        </h5>
      </li>
      <li
        class="posts-carousel-item"
        :style="{
          background: '#e3e3e3',
          color: '#a28276',
          transform: `translateX(-${index * 100}%)`,
        }"
      >
        <h3 class="carousel-item-title">
          코드 리뷰 커뮤니티 Q & A
          <br />
          많.관.부!
        </h3>
        <h5 class="carousel-item-description">
          수 많은 분들이 답변을 기다리고 있어요!!
        </h5>
      </li>
    </ul>
  </div>
  <div class="posts-carousel-radios">
    <button
      class="posts-carousel-radio"
      :class="{ active: index === 0 }"
      @click="onToggleButton(0)"
    ></button>
    <button
      class="posts-carousel-radio"
      :class="{ active: index === 1 }"
      @click="onToggleButton(1)"
    ></button>
    <button
      class="posts-carousel-radio"
      :class="{ active: index === 2 }"
      @click="onToggleButton(2)"
    ></button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

let interval;
let index = ref(0);

function onToggleButton(newIndex) {
  index.value = newIndex;
}

onMounted(() => {
  interval = setInterval(() => {
    index.value += 1;
    index.value %= 3;
  }, 2500);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";
.posts-carousel-box {
  position: relative;
  width: 100%;
  height: 360px;
  overflow: hidden;
  border-radius: 4px;

  @include tablet {
    height: 200px;
  }
}

.posts-carousel-menu {
  width: 300%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.posts-carousel-item {
  width: 100%;
  height: 100%;
  padding: 36px 24px;
  box-sizing: border-box;
  transition: transform 1s ease;

  @include tablet {
    padding: 36px;
  }
}

.carousel-item-title {
  font-size: 18px;
  font-weight: 700;
  font-family: "Noto Sans KR";
  line-height: 140%;
  letter-spacing: -0.8px;
  padding-top: 8px;
  padding-bottom: 12px;

  @include tablet {
    margin-top: 2px;
    font-size: 1.35rem;
  }
}

.carousel-item-description {
  font-size: 13px;
  font-family: "Noto Sans KR";
  line-height: 140%;
  letter-spacing: -0.8px;
  font-weight: 400;
  opacity: 0.8;
  word-spacing: 0px;

  @include tablet {
    font-size: 0.85rem;
  }
}

.posts-carousel-radios {
  width: 100%;
  margin-top: 6px;
  background: #fff;
  text-align: center;
}

.posts-carousel-radio {
  width: 0.75rem;
  height: 0.755rem;
  box-sizing: border-box;
  border: none;
  background: #d9d9d9;
  border-radius: 50%;
  cursor: pointer;

  & + & {
    margin-left: 12px;
  }

  &.active {
    background: $main-color-dark;
  }
}
</style>
