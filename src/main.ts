import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/routes";
import "./styles/style.css";

const app = createApp(App);

app.use(router);
app.mount("#app");