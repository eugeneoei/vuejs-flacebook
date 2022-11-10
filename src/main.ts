import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faComment } from "@fortawesome/free-regular-svg-icons";

import App from "./App.vue";
import router from "./router";

import "./assets/style.css";

library.add(faSpinner, faThumbsUp, faComment);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
