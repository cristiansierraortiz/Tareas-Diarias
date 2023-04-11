import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/assets/css/iziToast.min.css";
import "../src/assets/js/iziToast.min";

createApp(App).use(router).mount("#app");
