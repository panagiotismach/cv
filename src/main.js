import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Particles from "vue3-particles";
import BaseContainer from "../src/components/basics/BaseContainer.vue";
import BaseButton from "./components/basics/BaseButton.vue";
import BaseHeader from "./components/basics/BaseHeader.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin);
library.add(faGithub);
library.add(faEnvelope);
library.add(faBriefcase);
library.add(faGraduationCap);

const app = createApp(App);

app.use(Particles);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-container", BaseContainer);
app.component("base-button", BaseButton);
app.component("base-header", BaseHeader);

app.mount("#app");
