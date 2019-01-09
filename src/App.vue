<template>
  <div id="vueApp" class='container-fluid'>
      
      <router-view id='left-content' name='left' class='col-sm-2'></router-view>
      <div id='main-content' class='col-sm'>
        <!-- <button id='goBack' @click='goBack' v-if='pageDepth > 0'>Back {{ pageDepth }} </button> -->
        <router-view ></router-view>
      </div>
      <router-view id='right-content' name='right' class='col-sm-2'></router-view>

  </div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'APP'
    }
  }
}
</script>

<style>
#vueApp {
  padding: 10px 0;
}
</style>
