<template>
  <section class="issue-list-section" :class="classObject">
    <h3 class="list-section-head">
      {{ label }} <b>1</b>
      <span class="list-section-icon">
        <Ellipsis />
      </span>
    </h3>
    <ul class="list-section-list">
      <IssueItem />
    </ul>
    <div class="list-section-form">
      <IssueForm />
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import IssueItem from "./IssueItem";
import Ellipsis from "../../../assets/icons/Ellipsis";
import IssueForm from "./IssueForm";

const props = defineProps(["label"]);

const classObject = computed(() => {
  return props.label.replace(" ", "-").toLowerCase();
});
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.issue-list-section {
  position: relative;
  width: 270px;
  min-height: 250px;
  border-radius: 8px;
  background: $background-color-3;
}

.list-section-head {
  width: 100%;
  padding: 18px 12px;
  box-sizing: border-box;
  font-size: 0.725rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #888;

  b {
    font-size: 0.7rem;
    margin-left: 4px;
    margin-bottom: 2px;
  }

  &:hover {
    .list-section-icon {
      display: inline-block;
    }
  }
}

.list-section-icon {
  position: absolute;
  top: 18px;
  right: 12px;
  display: none;
  cursor: pointer;

  svg {
    width: 0.85rem;
    height: 0.85rem;
    fill: #666;
  }
}

.list-section-list {
  width: 100%;
  padding: 0 6px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.list-section-form {
  width: 100%;
  padding: 0 6px;
  box-sizing: border-box;
}
</style>
