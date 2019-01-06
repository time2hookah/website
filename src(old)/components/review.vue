<template>
<div>
    <div id='review'>
        <h4 class='text-center'>Review</h4>

        <div class="row review-info">
            <div class="col-sm-12">
                <p>Dear {{ inputs.firstName.value }} {{ inputs.lastName.value }},
                    <br>You may review the information you submitted here. We have also sent a copy of this to the email you provided.
                </p>

                <br>

                <div>
                    <div class="row">
                        <div class="col-sm-6 text-right"><b>Name:</b></div>
                        <div class="col-sm-6">{{ inputs.firstName.value }} {{ inputs.lastName.value }}</div>
                    </div>
                    <!-- <div class="row">
                        <div class="col-sm-6 text-right"><b>Date of Birth:</b></div>
                        <div class="col-sm-6">{{ inputs.dob.value }}</div>
                    </div> -->
                    <div class="row">
                        <div class="col-sm-6 text-right"><b>Prefix:</b></div>
                        <div class="col-sm-6">{{ inputs.prefix.value }}</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 text-right"><b>Contact Email:</b></div>
                        <div class="col-sm-6">{{ inputs.email.value }}</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 text-right"><b>Contact Phone:</b></div>
                        <div class="col-sm-6">{{ inputs.phone.value }} {{ inputs.phoneExt.value ? ('x ' + inputs.phoneExt.value) : null }}</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 text-right"><b>Company Name:</b></div>
                        <div class="col-sm-6">{{ inputs.companyName.value }}</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 text-right"><b>Your Title:</b></div>
                        <div class="col-sm-6">{{ inputs.title.value }}</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 text-right"><b>Number of Employees:</b></div>
                        <div class="col-sm-6">{{ inputs.numberOfEmployees.value }}</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 text-right"><b>Company Address:</b></div>
                        <div class="col-sm-6">
                            <address>
                                {{ inputs.address1.value }}
                                {{ inputs.address2.value ? inputs.address2.value + '\n' : '' }}
                                <br>{{ inputs.city.value ? inputs.city.value + ', ' : '' }}{{ inputs.state.code }} {{ inputs.zip.value }} {{ inputs.zipExt.value ? (' - ' + inputs.zipExt.value) : null }} <br>
                            </address>

                            <!--
                                {{ inputs.address1.value }}
                                {{ inputs.address2.value ? inputs.address2.value + '\n' : '' }}
                                <br>{{ inputs.city.value ? inputs.city.value + ', ' : '' }}{{ inputs.state.code }} {{ inputs.zip.value }} {{ inputs.zipExt.value ? (' - ' + inputs.zipExt.value) : null }} <br>
                            -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 text-right"><b>Note:</b></div>
                        <div class="col-sm-6">{{ inputs.note.value }}</div>
                    </div>

                    <br>

                    <div class="row">
                        <div class="col-sm-6 text-right"><b>Services interested in:</b></div>
                        <!-- <div class="col-sm-6">{{ shoppingTray_string }} </div> -->
                        <div class="col-sm-6">
                            <ul v-for='(s,i) in this.$root.shoppingTray' :key="i">
                                <u>{{ s.name }}</u>
                                <ul>
                                    <li v-for="(a,j) in s.addons" :key='j'>
                                        - {{ a }}
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>

                </div>

                <hr>
                <br>
                <div class="row buttons">
                    <div class="col-sm-6">
                        <button class='btn'><a href="http://worktray.com/">Home</a></button>
                    </div>
                    <div class="col-sm-6">
                        <button class='btn' @click.prevent='servicesClick'>
                            Services
                            <!-- <router-link to='services'>Services</router-link> -->
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <!-- <ul>
            <div class="row">
                <div class="col-sm-12 ">
                    <li v-for='(val, key, i) in inputs' :key='i'>
                        <div class="row">
                            <div class="col-sm-6 text-right">
                                <b>{{ val.fullName }}</b>
                            </div>
                            <div class="col-sm-6">
                                {{ val.value }}
                            </div>
                        </div>

                    </li>
                </div>
            </div>
        </ul> -->
    </div>
</div>
</template>


<script>
export default {
    data: function() {
        return {
            inputs: this.$route.params.inputs,
        };
    },
    computed: {
        shoppingTray_string: function() {
            return Object.keys(this.inputs.shoppingTray.value).join(', ');
        }
    },
    beforeCreate: function( ){
        if (this.$route.params.inputs == undefined) {
            this.$route.params.inputs = JSON.parse( sessionStorage.getItem('VueStore-inputs') );
        }
    },
    mounted: function() {
        var breadcrumbs = '' +
            '<li><a href="https://worktray.com/">Home</a></li>' +
            '<li><a href="#/services">Services</a></li>' +
            '<li><a href="#/checkout">Checkout</a></li>' +
            '<li class="active">Review</li>';

        $('#breadcrumbs ul').html(breadcrumbs);

    },
    beforeDestroy: function() {

    },
    methods: {
        servicesClick: function() {
            this.$root.shoppingTray = {};
            this.$router.push('/services');
        }
    }
};
</script>

<style scoped>
    #review {
        margin: 25px 0;
    }

    .review-info {
        width: 65%;
        margin: 0 auto;
    }

    .buttons {
        width: max-content;
        margin: 0 auto;
    }

    .buttons .btn {
        min-width: 150px;;
    }
</style>