<template>
<div>
    <!-- <cfset shoppingTray=[ 'HR', 'Loans', 'Healthcare', 'Payroll', '401k', 'IT']> -->
    <h1>{{this.$root.$data.shoppingTray}}</h1>
    <div id='checkout' class="container">
        <br>
        <h3 class="text-center">Checkout</h3>
        <div class="row mt-5">
            <div class="col-sm-12">
                <div class="tabs-custom tabs-horizontal tabs-corporate" id="tabsCheckout">
                    <!-- Nav tabs-->
                    <ul id='checkout-nav-tabs' class="nav nav-tabs">
                        <!-- <cfloop array="#shoppingTray#" item="el" index='i'>
                            <cfset tabActive = ''>
                            <cfif i EQ 1>
                                <cfset tabActive = 'active'>
                            </cfif>
                        </cfloop> -->
                        <li v-for='(el, i) in shoppingTray' :key='i' :class='{"active": i == 0}'>
                            <a :href="'#tabsCheckout-' + i" data-toggle="tab" aria-expanded="false">{{el}}</a>
                        </li>
                    </ul>
                    <!-- Tab panes-->
                    <div class="tab-content">
                        <!-- <cfloop array="#shoppingTray#" item="el" index='i'>
                            <cfset tabContentActive = ''>
                            <cfif i EQ 1>
                                <cfset tabContentActive = 'active'>
                            </cfif>
                            <cfset tempName = lCase(el)>

                        </cfloop> -->
                        <div
                            :id="'tabsCheckout-' + i"
                            class="tab-pane"
                            :class='{"active": i == 0}'
                            v-for='(el,i) in shoppingTray'
                            :key='i'
                        >
                            {{el + '-' + i}}
                            <!-- <cfinclude template="checkout_#tempName#_template.cfm"> -->
                        </div>

                        <div class="tab-pane" id="tabsCheckout-" data-tabname='review'>
                            <h3>Thanks for reaching out. We will be in touch shortly.</h3>
                        </div>

                    </div>

                    <div class="range range-20 form-wrap">
                        <div class="col-sm-6 offset-sm-6">
                            <button id='checkout-btn-next' class="button button-secondary button-block button-ujarak">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="row">
            <div class="col-sm-12">
                <br>
                <p>Haven't decided on a price? Don't worry, you can always change this later!</p>
                <p>You can also check out our business valuation calculator to help you get a better idea.</p>
                What is a success fee?
            </div>
        </div> -->
    </div>
</div>
</template>


<script>
export default {
    data: function() {
        return {
            shoppingTray: this.$root.$data.shoppingTray
        };
    }
};
</script>

<style scoped>

</style>