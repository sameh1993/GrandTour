import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// include jquery
window.$ = window.jQuery = require('jquery');



// include vue min file
import "../node_modules/vue/dist/vue.min.js";


// include bootstrap files
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// include customs.scss file
import "./GlobalRules/scss/mainRules.scss";


// include font awesome
import "./assets/css/font-awesome.min.css";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
