import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import VeeValidate from "vee-validate";
import VueTheMask from "vue-the-mask";
import VueToastr2 from "vue-toastr-2";

// import './mixin';

window.toastr = require("toastr");
window.toastr.options.positionClass = "toast-top-center";

// import * as $ from "jquery";
window.$ = require("jquery");
/* INITIALIZE */

Vue.use(VeeValidate);
Vue.use(VueTheMask);
Vue.use(VueToastr2);

Vue.prototype.$http = axios;
// var $axios = axios;

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  data: {
    message: "Hello Vue!",
    curStep: 0,
    stepSequence: [0]
  },
  render: h => h(App)
}).$mount("#app");

window.vmAccess = vm;
