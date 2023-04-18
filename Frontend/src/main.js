import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/assets/css/iziToast.min.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/js/iziToast.min";
import "../src/assets/js/bootstrap.bundle.min";
import "../src/assets/js/fontawesome.min";

createApp(App).use(router).mount("#app");
