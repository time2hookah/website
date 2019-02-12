import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Wizard from "./views/Wizard.vue";
import About from "./views/About.vue"; 

Vue.use(Router);

const NotFound = {
  template: '<h1 class="text-center">Page not found</h1>'
};

let routes = [
  { path: "*", name: "notFound", component: NotFound },
  { path: "/", name: "home", component: Home },
  { path: "/wizard", name: "wizard", component: Wizard },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/about", name: "about", component: About }

  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
  // TOASK: why did you do it this way for this path? ^^^
];

var vueRouter = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

vueRouter.beforeEach((to, from, next) => {
  next();
});

export default vueRouter;
