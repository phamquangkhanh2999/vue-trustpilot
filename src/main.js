import Vue from "vue";
import AppLayout from "./layout/index.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import router from "./router";

import CatCarousel from "vue-cat-carousel";

Vue.use(CatCarousel);

library.add(fas, fab);

Vue.component("fa", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(AppLayout),
  router,
}).$mount("#app");
