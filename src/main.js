import Vue from 'vue'
import router from "./router";
import store from "./store/index";
import App from './App.vue'
import "font-awesome/css/font-awesome.css";
import i18n from "./lang";
import VueCookies from "vue-cookies";
import Tools from "./utils/tools";
import "@/styles/index.scss"; // global css

Vue.use(Tools);
Vue.use(VueCookies);
Vue.use({
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
