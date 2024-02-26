import Vue from "vue";
import { createApp } from "vue";
import App from "./App";

//vue-google-map api by @fawmi/vue-google-maps
import VueGoogleMaps from "@fawmi/vue-google-maps";

//router created by vue-router@4
import router from "./routes/index";

createApp(App)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyCxKBkm585VLb1nlcv11SMwf6akiPxEc7A",
    },
  })
  .mount("#app");
