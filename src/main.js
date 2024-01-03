import Vue from "vue";
import { createApp } from "vue";
import App from "./App";

//nprogress created by nprogress
import NProgress from "nprogress";

import "nprogress/nprogress.css";

//router created by vue-router@4
import router from "./routes/index";

//global coomponents by @common folder
import Pen from "./assets/icons/Pen";
import Button from "./components/@common/Button";
import BoldIcon from "./components/@common/Icons/BoldIcon";
import CodeIcon from "./components/@common/Icons/CodeIcon";
import ItalicIcon from "./components/@common/Icons/ItalicIcon";
import QuotesIcon from "./components/@common/Icons/QuotesIcon";

// Vue Router 전역 가드 설정
router.beforeEach((to, from, next) => {
  NProgress.start(); // 페이지 이동 시작 시 progress bar 시작
  next();
});

router.afterEach(() => {
  NProgress.done(); // 페이지 이동 완료 시 progress bar 완료
});

createApp(App)
  .use(router)
  .component("Pen", Pen)
  .component("Button", Button)
  .component("BoldIcon", BoldIcon)
  .component("CodeIcon", CodeIcon)
  .component("ItalicIcon", ItalicIcon)
  .component("QuotesIcon", QuotesIcon)
  .mount("#app");
