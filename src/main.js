import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Particles from "vue3-particles";
import BaseContainer from "../src/components/basics/BaseContainer.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin);
library.add(faGithub);

const app = createApp(App);

app.use(Particles);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-container", BaseContainer);

app.mount("#app");
