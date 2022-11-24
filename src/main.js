import { createApp } from "vue";
import App from "./App.vue";
import ponLibrary from "./index.js";

const app = createApp(App);
app.use(ponLibrary);
app.mount("#app");
