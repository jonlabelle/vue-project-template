import "@shoelace-style/shoelace/dist/themes/base.css";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//
// Shoelace web components (https://shoelace.style/getting-started/usage?id=vue)
Vue.config.ignoredElements = [/^sl-/];
import ShoelaceModelDirective from "@shoelace-style/vue-sl-model";
Vue.use(ShoelaceModelDirective);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
