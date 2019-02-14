import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixin from "./mixin";

import axios from "axios";
import veeValidate from "vee-validate";
import vueTheMask from "vue-the-mask";
import vueToastr2 from "vue-toastr-2";

// import './mixin';

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

const vm = new Vue({
  router,
  store,
  mixin,
  data: {
    message: "Hello Vue!",
    curStep: 0,
    stepSequence: [0]
  },
  render: h => h(App)
}).$mount("#app");

window.vmAccess = vm;
