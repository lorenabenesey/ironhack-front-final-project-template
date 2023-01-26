import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
