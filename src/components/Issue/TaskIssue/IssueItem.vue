<template>
  <li class="issue-item">
    <RouterLink to="/issue/3">
      <h3 class="item-title">주간 TEST 문제 아이디어</h3>
      <h4 class="item-date">오전 12:00 ~ 오후 15:00</h4>
      <span class="item-icon"><Ellipsis /></span>
      <div class="item-tags">
        <Tag text="Large" color="red" />
        <Tag text="Ready" color="green" />
      </div>
      <div class="item-user">
        <span class="profile"></span>
      </div>
    </RouterLink>
  </li>
</template>

<script setup>
import Ellipsis from "../../../assets/icons/Ellipsis";
import Tag from "../../@common/Tag";
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/main.scss";

.issue-item {
  position: relative;
  width: 100%;
  min-height: 50px;
  padding: 16px 12px;
  box-sizing: border-box;
  border: 1px solid $border-color-0;
  box-shadow: 0 4px 10px 1px rgb(174, 183, 195, 0.1);
  border-radius: 3px;
  background: #fff;
  cursor: pointer;

  &:hover {
    background: rgb(252, 252, 252);

    .item-icon {
      display: inline-block;
    }
  }
}

.item-title {
  margin-bottom: 8px;
  font-size: 0.775rem;
  font-weight: 550;
  color: #333;
}

.item-icon {
  position: absolute;
  top: 16px;
  right: 12px;
  display: none;

  svg {
    width: 0.85rem;
    height: 0.85rem;
  }
}

.item-date {
  margin-bottom: 8px;
  font-size: 0.65rem;
  font-weight: 550;
  color: $font-color-1;
}

.item-tags {
  display: flex;
  gap: 8px;
}

.item-user {
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .profile {
    display: inline-block;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background: #d9d9d9;
  }
}
</style>
