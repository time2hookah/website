<template>
<div>
    <!-- <cfset shoppingTray=[ 'HR', 'Loans', 'Healthcare', 'Payroll', '401k', 'IT']> -->
    <h1>TEST</h1>
    <div id='checkout' class="container">
        <button @click='testButton'>hookah test</button>
    </div>
</div>
</template>


<script>
export default {
    data: function() {
        return {
            shoppingTray: this.$root.$data.shoppingTray
        };
    },
    methods: {
      testButton: function() {
        axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response.data.bpi))

      }
    }
};
</script>

<style scoped>

</style>