import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { firestorePlugin } from "vuefire";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
