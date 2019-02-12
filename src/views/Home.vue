<template>
  <div class="home">
    <ZipCodeCard />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ZipCodeCard from "@/components/ZipCodeCard.vue";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    ZipCodeCard
  }
};
</script>
