<template>
  <div id="app">
    <Header />
 
    <router-view id='left-content' name='left' class='col-sm-2'></router-view>
      <div id='main-content' class='col-sm'>
        <!-- <button id='goBack' @click='goBack' v-if='pageDepth > 0'>Back {{ pageDepth }} </button> -->
        <router-view ></router-view>
      </div>
    <router-view id='right-content' name='right' class='col-sm-2'></router-view>
     
    <Footer />
    <SecondaryContents />
    <GoToTop />

  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SecondaryContents from "@/components/SecondaryContents.vue";
import GoToTop from "@/components/GoToTop.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SecondaryContents,
    GoToTop
  },
  data () {
    return {
      title: 'App'
    }
  }
   
}
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#main-content {
  padding: 20px;
}
</style>
