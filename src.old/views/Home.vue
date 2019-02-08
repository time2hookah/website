<template>
  <div class="home">  
    
    <EligibilityCard/>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import EligibilityCard from "@/components/EligibilityCard.vue"; 

export default {
  name: "home",
   data () {
     return {
      
     }
  },
  components: {
    EligibilityCard
  }
};
</script>
