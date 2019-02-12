import Vue from 'vue';
import VueRouter from 'vue-router';

import Wizard from './Wizard.vue';
import Test1 from './Test1.vue';
import Signup from './Signup';
import Home from './Home';

/* import VueApp       from './components/VueApp.vue';
import SignUp       from './components/forms/tables/auth/SignUp.vue';
import Login        from './components/forms/tables/auth/Login.vue';
import Dash         from './components/Dash.vue';
import Tables       from './components/Tables.vue';
import ResourceCRUD from './components/ResourceCRUD.vue'; */

// import Services       from './components/services.vue';
// import Checkout       from './components/checkout-simple.vue';
// import Review       from './components/review.vue';

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };
const NotFound = {
  template: '<h1 class="text-center">Page not found</h1>',
  created: function () {
  }
};

var signedUp = true;

const routes = [
  { name: 'notFound', path: '*',        component: NotFound },
  { name: 'index',    path: '/',        component: Home },
  { name: 'home',     path: '/home',    component: Home },
  { name: 'wizard',   path: '/wizard',  component: Wizard },
  { name: 'signup',   path: '/signup',  component: Signup },
  { name: 'test',     path: '/test1',   component: Test1 },
  // { name: 'services', path: '/services', component: Services },
  // { name: 'checkout', path: '/checkout', component: Checkout },
  // { name: 'review', path: '/review', component: Review }

  /*     { path: '/signup', component: SignUp },
      {
          path: '/dash', name: 'dash',
          components: {
              default: Dash,
              left: Foo,
              right: Bar
          },
          meta: {
              requiresAuth: true
          }
      },
      { path: '/tables', name: 'tables', component: Tables },
      { path: '/tables/:schema/:name', name: 'crud', component: ResourceCRUD },
  
      { path: '/vue-app', component: VueApp },
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar } */
];

var vueRouter = new VueRouter({
  routes
});

vueRouter.beforeEach((to, from, next) => {
  next();
});

export default vueRouter;
