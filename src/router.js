import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Serivces from "./views/Serivces.vue";
import Packages from "./views/Packages.vue";
import ContactUs from "./views/ContactUs.vue";
import Registeration from "./views/Registeration.vue";
import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/services",
      name: "serivces",
      component: Serivces
    },
    {
      path: "/packages",
      name: "packages",
      component: Packages
    },
    {
      path: "/contacts",
      name: "contactUs",
      component: ContactUs
    },
    {
      path: "/Register",
      name: "Registeration",
      component: Registeration
    },
    {
      path: '/dashboard',
      name: "Dashboard",
      component: Dashboard
    }
  ]
});