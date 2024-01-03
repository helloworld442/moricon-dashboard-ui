<template>
  <div class="category-list-box">
    <ul class="category-list" v-for="category in categorys">
      <li class="category-item" v-for="item in category">
        <CategoryItem v-bind="item" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import CategoryItem from "./CategoryItem";

const categoryData = [
  {
    categoryId: 1,
    categoryName: "React",
    categoryDesc: "프론트엔드의 근본인",
  },
  {
    categoryId: 2,
    categoryName: "JavaScript",
    categoryDesc: "웹 개발자에게 필수인",
  },
  {
    categoryId: 3,
    categoryName: "CSS",
    categoryDesc: "스타일링의 근본인",
  },
  {
    categoryId: 4,
    categoryName: "HTML",
    categoryDesc: "많은 사람들에게 알려진",
  },
  {
    categoryId: 5,
    categoryName: "Node Js",
    categoryDesc: "요즘 핫하게 뜨고 있는",
  },
  { categoryId: 6, categoryName: "Spring", categoryDesc: "백엔드의 근본인" },
  {
    categoryId: 7,
    categoryName: "Java",
    categoryDesc: "백엔드라면 꼭 알아야 할",
  },
  {
    categoryId: 8,
    categoryName: "Kotlin",
    categoryDesc: "안드라드라면 꼭 알아야 할",
  },
];

const categorys = computed(() => {
  return categoryData.reduce((acc, _, index) => {
    if (index % 2 === 0) {
      acc.push(categoryData.slice(index, index + 2));
    }
    return acc;
  }, []);
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.category-list-box {
  width: 900px;
  margin: 72px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 14px;

  @include tablet {
    width: 600px;
    grid-template-columns: repeat(3, 1fr);
  }
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 14px;

  &:nth-child(2n) {
    position: relative;
    top: 108px;
  }

  @include tablet {
    &:nth-child(2n) {
      position: relative;
      top: 0;
    }

    &:nth-child(3n + 2) {
      position: relative;
      top: 108px;
    }
  }
}

.category-item {
  width: 100%;
  height: 240px;
  padding: 36px 24px;
  box-sizing: border-box;
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  background: $main-color-light;

  &:nth-child(2) {
    background: $background-color-5;
  }

  &:hover {
    transform: scale(1.05);
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
</style>
