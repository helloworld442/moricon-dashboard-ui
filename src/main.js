import Vue from "vue";
import { createApp } from "vue";
import App from "./App";

//router created by vue-router@4
import router from "./routes/index";

createApp(App).use(router).mount("#app");
