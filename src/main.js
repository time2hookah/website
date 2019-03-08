import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixin from "./mixin";

import axios from "axios";
import veeValidate from "vee-validate";
import vueTheMask from "vue-the-mask";
import vueToastr2 from "vue-toastr-2";

window.toastr = require("toastr");
window.toastr.options.positionClass = "toast-top-center";

// import * as $ from "jquery";
window.$ = require("jquery");
/* INITIALIZE */

Vue.use(veeValidate);
Vue.use(vueTheMask);
Vue.use(vueToastr2);

Vue.prototype.$http = axios;
// var $axios = axios;

Vue.config.productionTip = false;

// Subscribe to store updates
store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem('store', JSON.stringify(state));
});

const vm = new Vue({
  router,
  store,
  mixin,
  /* computed: {
    curStep() {
      return this.$store.state.curStep;
    },
    nextStep() {
      return this.$store.state.nextStep;
    },
    stepSequence() {
      return this.$store.state.stepSequence;
    },
    order() {
      return this.$store.state.order;
    },
  }, */
  beforeCreate() {
    this.$store.dispatch('initializeStore');
  },
  render: h => h(App)
}).$mount("#app");

window.vmAccess = vm;
