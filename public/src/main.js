import config from './config';
import Vue from 'vue';
import VeeValidate from 'vee-validate';

import axios from 'axios';

import router from './router.js';
import App from './App';
import * as $ from 'jquery';
import './mixin';
import VueTheMask from 'vue-the-mask';
import VueToastr2 from 'vue-toastr-2';
import 'vue-toastr-2/dist/vue-toastr-2.min.css';

// Vue.use(axios);
Vue.use(VeeValidate);
Vue.use(VueTheMask);

window.toastr = require('toastr');
Vue.use(VueToastr2);
toastr.options.positionClass = 'toast-top-center';

console.log('in main.js');

/* AXIOS INTERCEPTROS */
/* axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // config.headers.common['Access-Control-Request-Headers'] = 'x-requested-with';
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
}); */

Vue.prototype.$http = axios;
var $axios = axios;


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


// set up vue dataStore
if (sessionStorage.getItem('VueStore-shoppingTray') == undefined) {
    sessionStorage.setItem('VueStore-shoppingTray', {});
}
if (sessionStorage.getItem('VueStore-inputs') == undefined) {
    sessionStorage.setItem('VueStore-inputs', {});
}
var env = config();
// console.log({env});

var app = new Vue({
    el: '#app',
    router,
    data: function () {
        return {
            // shoppingTray: Object.keys(JSON.parse(sessionStorage.getItem('VueStore-shoppingTray'))).length ? JSON.parse(sessionStorage.getItem('VueStore-shoppingTray')) : {},
            // env: env
        };
    },
    created: function() {
        /* this.$http.get('https://jsonplaceholder.typicode.com/todos/1').then(function(data) {
            console.log({data});
        }); */
    },
    computed: {
        /* shoppingTray: function( ) {
            var tray = JSON.parse(sessionStorage.getItem('VueStore-shoppingTray'));

            if (Object.keys(tray).length > 0) {
                return tray;
            } else {
                return [];
            }
        }, */
    },
    render: h => h(App)
});



// .$mount('#main')

