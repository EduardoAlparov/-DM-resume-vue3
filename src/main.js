import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import mitt from "mitt";

const emitter = mitt();

createApp(App).provide("emitter", emitter).use(store).use(router).mount("#app");
