import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // This line is absolutely essential
import vuetify from "./plugins/vuetify";
import axios from "axios";

// Font setup
import webfontloader from "webfontloader";
webfontloader.load({
  google: {
    families: ["Roboto:100,300,400,500,700,900&display=swap"],
  },
});

// createApp(App).use(vuetify).mount("#app");

const app = createApp(App);
app.use(router); // Use the router instance
app.use(vuetify);
app.config.globalProperties.$axios = axios;

app.mount("#app");
