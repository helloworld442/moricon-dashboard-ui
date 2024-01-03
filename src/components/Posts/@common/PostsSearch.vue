<template>
  <form class="posts-search-form" @submit.prevent="search">
    <button type="submit" id="button">
      <SearchIcon class="icon" />
    </button>
    <input
      ref="input"
      type="text"
      id="content"
      name="content"
      v-model="content"
      placeholder="제목을 입력하세요"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";
import SearchIcon from "../../../assets/icons/Search";

const input = ref(null);
const content = ref("");

function search() {
  reset();
}

function reset() {
  content.value = "";
  input.value.focus();
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";
.posts-search-form {
  width: 100%;
  height: 62px;
  padding: 0 18px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid $border-color-1;
  display: flex;
  align-items: center;
  gap: 12px;
}

#content {
  width: 650px;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 500;
  color: #333;

  &::placeholder {
    color: $placeholder-color-0;
  }
}

#button {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: transparent;
  color: $main-color-dark;
  .icon {
    display: inline-block;
    margin-top: 3px;
    width: 1.1rem;
    height: 1.1rem;
    fill: $main-color-dark;
  }
}
</style>
