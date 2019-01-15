console.log('in main.js');

                    /* IMPORT */

import App from "./App";
import Vue from 'vue';

import axios from 'axios';
import VeeValidate from 'vee-validate';
import * as $ from 'jquery';
import VueTheMask from 'vue-the-mask';
import VueToastr2 from 'vue-toastr-2';

import router from './router';
import './mixin';

window.toastr = require('toastr');
toastr.options.positionClass = 'toast-top-center';

window.$ = require('jquery');
                    /* INITIALIZE */

// Vue.use(axios);
Vue.use(VeeValidate);
Vue.use(VueTheMask);
Vue.use(VueToastr2);

Vue.prototype.$http = axios;
var $axios = axios;


                    /* OPTIONS */

/* AXIOS INTERCEPTROS */
/* axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // config.headers.common['Access-Control-Request-Headers'] = 'x-requested-with';
    // config.headers['x-auth-token'] =  'ciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzE4MmI1NjdhNzIwYWQ2MGU1ZWIwODIiLCJlbWFpbCI6ImhhbWxldHRhbWF6QGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU0NzA3MzM0NywiZXhwIjoxNTQ3MDc2OTQ3LCJhdWQiOiJodHRwOi8vdGltZTJob29rYWguY29tIiwiaXNzIjoidGltZTJob29rYWggbGxjIiwic3ViIjoiaW5mb0B0aW1lMmhvb2thaC5jb20ifQ.IpuikXJXzItrc7Wp8qEY0gi8YHoykf2BzEzeC7RkMDGpOpKt81Uaaj6ryNrg66lJLht08MAk-lcs35y8FdVsTQ'
    debugger
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
}); */

/* axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
}); */


/* SET UP CUSTOM MESSAGES FOR VALIDATION */
const dict = {
  custom: {
    phone: {
      length: 'The Phone length must be 10.'
    },
    /* email: {
        required: 'Your email is empty'
    },
    name: {
        required: () => 'Your name is empty'
    } */
  }
};

VeeValidate.Validator.localize('en', dict);

                    /* START VUE */
var vm = new Vue({
  el: '#app',
  router,
  data: {
    message: 'Hello Vue!',
    curStep: 0

  },
  mounted: function (x) {
    
  }, 
  render: h => h(App)
});

window.vmHamlet = vm;

