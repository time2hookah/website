<template>
  <div id="app">
    <!--<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">   fixed-bottom
      <router-link to="/" class="navbar-brand mb-0 h1" >Worktray-Admin</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-center" id=" ">
        <ul class="navbar-nav mr-auto ">
          <li class="nav-item">
            <router-link to="/vue-app" class="nav-link">App</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dash" class="nav-link">Dash</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tables" class="nav-link">Tables</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/foo" class="nav-link">Foo</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/bar" class="nav-link">Bar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link">Sign Up</router-link>
          </li>
        </ul>
      </div>
    </nav>-->

    <div id="main" class='container-fluid'>
      <div class="row">
        <router-view id='left-content' name='left' class='col-sm-2'></router-view>
        <div id='main-content' class='col-sm'>
          <!-- <button id='goBack' @click='goBack' v-if='pageDepth > 0'>Back {{ pageDepth }} </button> -->
          <router-view ></router-view>
        </div>
        <router-view id='right-content' name='right' class='col-sm-2'></router-view>

      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            route: this.$route,
        };
    },
    computed: {
        /* shoppingTray: function( ) {
            var tray = JSON.parse(sessionStorage.getItem('shoppingTray'));

            if (Object.keys(tray).length > 0) {
                return tray;
            } else {
                return {};
            }
        }, */
        pageDepth: function() {
            return 1;
            // return Object.keys(this.$route.params).length;
        }
    },
};
</script>

<!--<style>
@import 'assets/css/style.css';
</style>-->

<style scoped>
#main-content {
    max-width: 1200px;
}
</style>

