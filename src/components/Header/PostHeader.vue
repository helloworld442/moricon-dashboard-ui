<template>
  <header class="header">
    <nav class="header-nav">
      <h4 class="nav-logo">별무리asdf</h4>

      <ul class="nav-menu">
        <li class="nav-item">
          <RouterLink to="/category">카테고리</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/posts/all">커뮤니티</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/write">글 남기기</RouterLink>
        </li>
        <li class="nav-item">
          <a>F & A</a>
        </li>
        <li class="nav-item primary">
          <a>로그인</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";
.header {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid $border-color-0;
}

.header-nav {
  width: 1078px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: "Jua";
  color: $main-color-light;
  cursor: pointer;
}

.nav-menu {
  display: flex;
}

.nav-item {
  height: 44px;
  padding: 14px 20px;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  cursor: pointer;

  &:hover {
    background: $background-color-1;
  }

  &.primary {
    margin-left: 24px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid $main-color-dark;

    &:hover {
      background: none;
      cursor: pointer;
    }

    a {
      color: $main-color-dark;
    }
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #333;
  }
}
</style>
