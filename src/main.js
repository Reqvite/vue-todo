import { createApp } from "vue";
import components from "./components/UI";

import "./style.css";
import App from "./App.vue";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
