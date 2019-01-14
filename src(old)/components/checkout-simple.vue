<template>
<div>
    <!-- <div class="container1">
        <div class="item pirate">
            <img src="src/assets/logos/favicon_png.png" width="100" alt="Item 1">
        </div>
        <h2 id="testing123">Testing Sticky</h2>
        <div class="item police">
            <img src="src/assets/logos/favicon_png.png" width="100" alt="Item 2">
        </div>
        <div class="item cowboy">
            <img src="src/assets/logos/favicon_png.png" width="100" alt="Item 3">
        </div>
        <div class="item doctor">
            <img src="src/assets/logos/favicon_png.png" width="100" alt="Item 4">
        </div>
    </div> -->

    <div id="checkout">
        <form id='checkout-form' @submit.prevent='onSubmit' class='col-sm-12 col-lg-8'>
            <!-- <cfset shoppingTray=[ 'HR', 'Loans', 'Healthcare', 'Payroll', '401k', 'IT']> -->
            <h3 class="text-center">Checkout</h3>
            <!-- <h5><b>Shopping Tray:</b> [ {{this.inputs.shoppingTray.value.join(', ')}} ] </h5> -->

            <div class='row mt-3'>
                <div class='col-sm-12'>
                    <div class='form-group text-center'>
                        <h5
                            id='checkout-shoppingTray'
                            class='form-control center-block'
                            :class='{"border-danger": manualErrors["shoppingTray"]}'
                        >
                            <!-- <b>Shopping Tray:</b> {{this.inputs.shoppingTray.value.join(', ')}} -->

                            <b>Shopping Tray:</b>
                            <ul data-toggle="tooltip" data-placement="top" title="Click on items to remove from Tray.">
                                <li v-for='(el, i) in inputs.shoppingTray.value' :key='i' class='d-inline-block'>
                                    <span v-show='i > 0'> ,</span>
                                    <span class='checkout-trayItem' @click='removeTrayItem'>
                                        <span>
                                            {{ el.name }}
                                            <i class="icon-gradient mdi mdi-close-circle"></i>
                                        </span>
                                    </span>
                                </li>

                            </ul>
                            <!-- {{this.inputs.shoppingTray.value.join(', ')}} -->
                        </h5>

                        <i v-show='manualErrors["shoppingTray"]' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='manualErrors["shoppingTray"]' class='help text-danger'>Please select services in order to check out.</span>
                    </div>
                </div>
            </div>

            <h4 class='text-center'>Basic Info</h4>
            <div class='row'>
                <div class='col-sm-4'>
                    <div class='form-group'>
                        <label for='checkout-firstName'>First Name*</label>
                        <input
                            name='firstName'
                            v-model.trim='inputs.firstName.value'
                            id='checkout-firstName'
                            class='form-control'
                            :class='{"border-danger": errors.has("firstName")}'
                            type='text'
                            placeholder='First Name'
                            data-vv-as='First Name'
                            v-validate='vRules.firstName'>

                        <i v-show='errors.has("firstName")' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='errors.has("firstName")' class='help text-danger'>{{ errors.first('firstName') }}</span>
                    </div>
                </div>
                <div class='col-sm-4'>
                    <div class='form-group'>
                        <label for='checkout-lastName'>Last Name*</label>
                        <input
                            name='lastName'
                            v-model.trim='inputs.lastName.value'
                            id='checkout-lastName'
                            class='form-control'
                            :class='{"border-danger": errors.has("lastName")}'
                            type='text'
                            placeholder='Last Name'
                            data-vv-as='Last Name'
                            v-validate='vRules.lastName'>

                        <i v-show='errors.has("lastName")' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='errors.has("lastName")' class='help text-danger'>{{ errors.first('lastName') }}</span>
                    </div>
                </div>
                <div class='col-sm-4'>
                    <div class='form-group'>
                        <label for='checkout-prefix'>Desired Prefix</label>
                        <!-- <select
                            name='prefix'
                            v-model.trim='inputs.prefix.value'
                            id='checkout-prefix'
                            class='form-control'
                            :class='{"border-danger": errors.has("prefix")}'
                            v-validate='vRules.prefix'>

                            <option value='' disabled selected>Please select prefix</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select> -->
                        <input
                            name='prefix'
                            v-model.trim='inputs.prefix.value'
                            id='checkout-prefix'
                            class='form-control'
                            :class='{"border-danger": errors.has("prefix")}'
                            type='text'
                            placeholder='Prefix'
                            data-vv-as='Prefix'
                            v-validate='vRules.prefix'>

                        <i v-show='errors.has("prefix")' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='errors.has("prefix")' class='help text-danger'>{{ errors.first('prefix') }}</span>
                    </div>
                </div>
                <!-- <div class='col-sm-3'>
                    <div class='form-group'>
                        <label for='checkout-dob'>Date of Birth</label>
                        <input
                            name='dob'
                            v-model.trim='inputs.dob.value'
                            id='checkout-dob'
                            class='form-control'
                            :class='{"border-danger": errors.has("dob")}'
                            type='text'
                            placeholder='Date of Birth'
                            data-vv-as='Date of Birth'
                            v-validate='vRules.dob'>

                        <i v-show='errors.has("dob")' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='errors.has("dob")' class='help text-danger'>{{ errors.first('dob') }}</span>
                    </div>
                </div> -->
            </div>

            <div class="row">
                <div class='col-sm-4'>
                    <div class='form-group'>
                        <label for='checkout-companyName'>Company Name*</label>
                        <input
                            name='companyName'
                            v-model.trim='inputs.companyName.value'
                            id='checkout-companyName'
                            class='form-control'
                            :class='{"border-danger": errors.has("companyName")}'
                            type='text'
                            placeholder='Company Name'
                            data-vv-as='Company Name'
                            v-validate='vRules.companyName'>

                        <i v-show='errors.has("companyName")' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='errors.has("companyName")' class='help text-danger'>{{ errors.first('companyName') }}</span>
                    </div>
                </div>
                <div class='col-sm-5'>
                    <div class='form-group'>
                        <label for='checkout-title'>Your Title*</label>
                        <input
                            name='title'
                            v-model.trim='inputs.title.value'
                            id='checkout-title'
                            class='form-control'
                            :class='{"border-danger": errors.has("title")}'
                            type='text'
                            placeholder='Your Title'
                            data-vv-as='Your Title'
                            v-validate='vRules.title'>

                        <i v-show='errors.has("title")' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='errors.has("title")' class='help text-danger'>{{ errors.first('title') }}</span>
                    </div>
                </div>
                <div class='col-sm-3'>
                    <div class='form-group'>
                        <label for='checkout-numberOfEmployees'>Number of Employees*</label>
                        <input
                            name='numberOfEmployees'
                            v-model.trim='inputs.numberOfEmployees.value'
                            id='checkout-numberOfEmployees'
                            class='form-control'
                            :class='{"border-danger": errors.has("numberOfEmployees")}'
                            type='tel'
                            placeholder='Number of Employees'
                            data-vv-as='Number of Employees'
                            v-validate='vRules.numberOfEmployees'
                            min='0'>

                        <i v-show='errors.has("numberOfEmployees")' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='errors.has("numberOfEmployees")' class='help text-danger'>{{ errors.first('numberOfEmployees') }}</span>
                    </div>
                </div>
            </div>

            <div class='row'>
                <div class='col-sm-6'>
                    <div class='form-group'>
                        <label for='checkout-email'>Email*</label>
                        <input
                            name='email'
                            v-model.trim='inputs.email.value'
                            id='checkout-email'
                            class='form-control'
                            :class='{"border-danger": errors.has("email")}'
                            type='email'
                            placeholder='Email'
                            data-vv-as='Email'
                            v-validate='vRules.email'>

                        <i v-show='errors.has("email")' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='errors.has("email")' class='help text-danger'>{{ errors.first('email') }}</span>
                    </div>
                </div>
                <div class='col-sm-6 text-center'>
                    <label for='checkout-phone' class=''>Phone Number*</label>
                    <div class="row">
                        <div class="col-sm-7">
                            <div class='form-group'>
                                <input
                                    name='phone'
                                    v-model.trim='inputs.phone.value'
                                    id='checkout-phone'
                                    class='form-control'
                                    :class='{"border-danger": errors.has("phone")}'
                                    type='tel'
                                    placeholder='Phone'
                                    data-vv-as='Phone'
                                    v-validate='vRules.phone'
                                    v-mask="'(###) ###-####'">

                                <i v-show='errors.has("phone")' class='fa fa-exclamation-circle text-danger'></i>
                                <span v-show='errors.has("phone")' class='help text-danger'>{{ errors.first('phone') }}</span>
                            </div>
                        </div>

                        <div class="col-sm-5">
                            <div class='form-group'>
                                <input
                                    name='phoneExt'
                                    v-model.trim='inputs.phoneExt.value'
                                    id='checkout-phoneExt'
                                    class='form-control'
                                    :class='{"border-danger": errors.has("phoneExt")}'
                                    type='tel'
                                    placeholder='Extension'
                                    data-vv-as='Extension'
                                    v-validate='vRules.phoneExt'>

                                <i v-show='errors.has("phoneExt")' class='fa fa-exclamation-circle text-danger'></i>
                                <span v-show='errors.has("phoneExt")' class='help text-danger'>{{ errors.first('phoneExt') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <h4 class='text-center'>Company Address</h4>
            <div class="row">
                <div class='col-sm-6'>
                    <div class='form-group'>
                        <label for='checkout-address1'>Address 1*</label>
                        <input
                            name='address1'
                            v-model.trim='inputs.address1.value'
                            id='checkout-address1'
                            class='form-control'
                            :class='{"border-danger": errors.has("address1")}'
                            type='text'
                            placeholder='Address'
                            data-vv-as='Address'
                            v-validate='vRules.address1'>

                        <i v-show='errors.has("address1")' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='errors.has("address1")' class='help text-danger'>{{ errors.first('address1') }}</span>
                    </div>
                </div>
                <div class='col-sm-6'>
                    <div class='form-group'>
                        <label for='checkout-address2'>Address 2</label>
                        <input
                            name='address2'
                            v-model.trim='inputs.address2.value'
                            id='checkout-address2'
                            class='form-control'
                            :class='{"border-danger": errors.has("address2")}'
                            type='text'
                            placeholder='Address'
                            data-vv-as='Address'
                            v-validate='vRules.address2'>

                        <i v-show='errors.has("address2")' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='errors.has("address2")' class='help text-danger'>{{ errors.first('address2') }}</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class='col-sm-4'>
                    <div class='form-group'>
                        <label for='checkout-city'>City*</label>
                        <input
                            name='city'
                            v-model.trim='inputs.city.value'
                            id='checkout-city'
                            class='form-control'
                            :class='{"border-danger": errors.has("city")}'
                            type='text'
                            placeholder='City'
                            data-vv-as='City'
                            v-validate='vRules.city'>

                        <i v-show='errors.has("city")' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='errors.has("city")' class='help text-danger'>{{ errors.first('city') }}</span>
                    </div>
                </div>
                <div class='col-sm-4'>
                    <div class='form-group'>
                        <label for='checkout-state'>State*</label>

                        <select
                            name='state'
                            v-model.trim='inputs.state.value'
                            @change='stateSelected'
                            id='checkout-state'
                            class='form-control'
                            :class='{"border-danger": errors.has("state")}'
                            data-vv-as='State'
                            v-validate='vRules.state'>

                            <option value='' disabled selected>Please select state</option>
                            <option value='Alabama'              data-code='AL'>Alabama</option>
                            <option value='Alaska'               data-code='AK'>Alaska</option>
                            <option value='Arizona'              data-code='AZ'>Arizona</option>
                            <option value='Arkansas'             data-code='AR'>Arkansas</option>
                            <option value='California'           data-code='CA'>California</option>
                            <option value='Colorado'             data-code='CO'>Colorado</option>
                            <option value='Connecticut'          data-code='CT'>Connecticut</option>
                            <option value='Delaware'             data-code='DE'>Delaware</option>
                            <option value='District Of Columbia' data-code='DC'>District Of Columbia</option>
                            <option value='Florida'              data-code='FL'>Florida</option>
                            <option value='Georgia'              data-code='GA'>Georgia</option>
                            <option value='Hawaii'               data-code='HI'>Hawaii</option>
                            <option value='Idaho'                data-code='ID'>Idaho</option>
                            <option value='Illinois'             data-code='IL'>Illinois</option>
                            <option value='Indiana'              data-code='IN'>Indiana</option>
                            <option value='Iowa'                 data-code='IA'>Iowa</option>
                            <option value='Kansas'               data-code='KS'>Kansas</option>
                            <option value='Kentucky'             data-code='KY'>Kentucky</option>
                            <option value='Louisiana'            data-code='LA'>Louisiana</option>
                            <option value='Maine'                data-code='ME'>Maine</option>
                            <option value='Maryland'             data-code='MD'>Maryland</option>
                            <option value='Massachusetts'        data-code='MA'>Massachusetts</option>
                            <option value='Michigan'             data-code='MI'>Michigan</option>
                            <option value='Minnesota'            data-code='MN'>Minnesota</option>
                            <option value='Mississippi'          data-code='MS'>Mississippi</option>
                            <option value='Missouri'             data-code='MO'>Missouri</option>
                            <option value='Montana'              data-code='MT'>Montana</option>
                            <option value='Nebraska'             data-code='NE'>Nebraska</option>
                            <option value='Nevada'               data-code='NV'>Nevada</option>
                            <option value='New Hampshire'        data-code='NH'>New Hampshire</option>
                            <option value='New Jersey'           data-code='NJ'>New Jersey</option>
                            <option value='New Mexico'           data-code='NM'>New Mexico</option>
                            <option value='New York'             data-code='NY'>New York</option>
                            <option value='North Carolina'       data-code='NC'>North Carolina</option>
                            <option value='North Dakota'         data-code='ND'>North Dakota</option>
                            <option value='Ohio'                 data-code='OH'>Ohio</option>
                            <option value='Oklahoma'             data-code='OK'>Oklahoma</option>
                            <option value='Oregon'               data-code='OR'>Oregon</option>
                            <option value='Pennsylvania'         data-code='PA'>Pennsylvania</option>
                            <option value='Rhode Island'         data-code='RI'>Rhode Island</option>
                            <option value='South Carolina'       data-code='SC'>South Carolina</option>
                            <option value='South Dakota'         data-code='SD'>South Dakota</option>
                            <option value='Tennessee'            data-code='TN'>Tennessee</option>
                            <option value='Texas'                data-code='TX'>Texas</option>
                            <option value='Utah'                 data-code='UT'>Utah</option>
                            <option value='Vermont'              data-code='VT'>Vermont</option>
                            <option value='Virginia'             data-code='VA'>Virginia</option>
                            <option value='Washington'           data-code='WA'>Washington</option>
                            <option value='West Virginia'        data-code='WV'>West Virginia</option>
                            <option value='Wisconsin'            data-code='WI'>Wisconsin</option>
                            <option value='Wyoming'              data-code='WY'>Wyoming</option>
                        </select>

                        <i v-show='errors.has("state")' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='errors.has("state")' class='help text-danger'>{{ errors.first('state') }}</span>
                    </div>
                </div>
                <div class='col-sm-4 text-center'>
                    <label for='checkout-zip' class=''>Zip Code*</label>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class='form-group'>
                                <input
                                    name='zip'
                                    v-model.trim='inputs.zip.value'
                                    id='checkout-zip'
                                    class='form-control'
                                    :class='{"border-danger": errors.has("zip")}'
                                    type='tel'
                                    placeholder='Zip'
                                    data-vv-as='Zip'
                                    v-validate='vRules.zip'
                                    v-mask="'#####'">


                                <i v-show='errors.has("zip")' class='fa fa-exclamation-circle text-danger'></i>
                                <span v-show='errors.has("zip")' class='help text-danger'>{{ errors.first('zip') }}</span>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class='form-group'>
                                <input
                                    name='zipExt'
                                    v-model.trim='inputs.zipExt.value'
                                    id='checkout-zipExt'
                                    class='form-control'
                                    :class='{"border-danger": errors.has("zipExt")}'
                                    type='tel'
                                    placeholder='Extension'
                                    data-vv-as='Extension'
                                    v-validate='vRules.zipExt'
                                     v-mask="'####'">

                                <i v-show='errors.has("zipExt")' class='fa fa-exclamation-circle text-danger'></i>
                                <span v-show='errors.has("zipExt")' class='help text-danger'>{{ errors.first('zipExt') }}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <br>

            <h4 class='text-center'>Other</h4>

            <div class='row'>
                <div class='col-sm-12'>
                    <div class='form-group'>
                        <label for='checkout-note'>Note</label>
                        <textarea
                            name='note'
                            v-model.trim='inputs.note.value'
                            id='checkout-note'
                            class='form-control'
                            :class='{"border-danger": errors.has("note")}'
                            cols='30' rows='3'
                            placeholder='Note'
                            data-vv-as='Note'
                            v-validate='vRules.note'>
                        </textarea>

                        <i v-show='errors.has("statusID")' class='fa fa-exclamation-circle text-danger'></i>
                        <span v-show='errors.has("statusID")' class='help text-danger'>{{ errors.first('statusID') }}</span>
                    </div>
                </div>
            </div>

            <p>* - Fields marked with this are required.</p>

            <button class='btn' type='submit'>Submit</button>

            <br>
        </form>

        <div id='checkout-review' class='visible-lg-block col-lg-4'>

            <div id="checkout-errors">

            </div>
            <!-- <div class="row">
            </div> -->

            <h4 class="mt-0">Review</h4>
            <br>
            <div class="row">
                <div class="col-sm-6 text-right"><b>Prefix:</b></div>
                <div class="col-sm-6">{{ inputs.prefix.value }}</div>
            </div>
            <div class="row">
                <div class="col-sm-6 text-right"><b>Name:</b></div>
                <div class="col-sm-6">{{ inputs.firstName.value }} {{ inputs.lastName.value }}</div>
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
                <div class="col-sm-6 text-right"><b># of Employees:</b></div>
                <div class="col-sm-6">{{ inputs.numberOfEmployees.value }}</div>
            </div>
            <div class="row">
                <div class="col-sm-6 text-right"><b>Company Address:</b></div>
                <div class="col-sm-6">
                    {{ inputs.address1.value }}
                    {{ inputs.address2.value ? inputs.address2.value + '\n' : '' }}
                    <br>{{ inputs.city.value ? inputs.city.value + ', ' : '' }}{{ inputs.state.code }} {{ inputs.zip.value }} {{ inputs.zipExt.value ? (' - ' + inputs.zipExt.value) : null }} <br>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 text-right"><b>Note:</b></div>
                <div class="col-sm-6">{{ inputs.note.value }}</div>
            </div>

            <br>

            <div class="row">
                <div class="col-sm-6 text-right"><b>Services interested in:</b></div>
                <div class="col-sm-12">
                    <!-- {{ shoppingTray_string }}  -->
                    <!-- <span>
                        {{inputs.shoppingTray}}
                    </span> -->
                    <ul class='pl-3' v-for='(s,i) in this.$root.shoppingTray' :key="i">
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
    </div>
</div>
</template>


<script>
export default {
    data: function() {
        return {
            inputs: this.inputs_temp,
            /* inputs: {
                shoppingTray: {
                    fullName: 'Shopping Tray',
                    value: this.$root.shoppingTray,
                },
                firstName: {
                    fullName: 'First Name',
                    value: 'hamlet',
                },
                lastName: {
                    fullName: 'Last Name',
                    value: 'tamaz',
                },
                dob: {
                    fullName: 'Date of Birth',
                    value: '01/22/1993',
                },
                prefix: {
                    fullName: 'Prefix',
                    value: 'male'
                },
                companyName: {
                    fullName: 'Company Name',
                    value: 'worktray',
                },
                title: {
                    fullName: 'Title',
                    value: 'web dev',
                },
                email: {
                    fullName: 'Email',
                    value: 'h@gmail.com',
                },
                phone: {
                    fullName: 'Phone',
                    value: '8182680008',
                },
                phoneExt: {
                    fullName: 'PhoneExt',
                    value: '123456',
                },
                address1: {
                    fullName: 'Address1',
                    value: '6735 yucca',
                },
                address2: {
                    fullName: 'Address2',
                    value: 'ad2',
                },
                city: {
                    fullName: 'City',
                    value: 'yerevan',
                },
                state: {
                    fullName: 'State',
                    value: 'CA',
                },
                zip: {
                    fullName: 'Zip',
                    value: '90028',
                },
                zipExt: {
                    fullName: 'ZipExt',
                    value: '0056',
                },
                country: {
                    fullName: 'Country',
                    value: 'USA',
                },
                note: {
                    fullName: 'Note',
                    value: 'small note',
                },
            }, */
            vRules: {
                firstName: {
                    required: true,
                    alpha: true,
                    min: 2,
                },
                lastName: {
                    required: true,
                    alpha: true,
                    min: 2,
                },
                dob: {
                    required: false,
                    date_format: 'MM/DD/YYYY'
                },
                prefix: {
                    max: 10
                },
                companyName: {
                    required: true,
                    max: 50
                },
                numberOfEmployees: {
                    required: true,
                    numeric: true,
                    min_value: 1,
                    max: 5
                },
                title: {
                    required: true,
                    alpha_spaces: true,
                    max: 50
                },
                email: {
                    required: true,
                    email: true,
                    max: 50
                },
                phone: {
                    required: true,
                    length: 14,
                },
                phoneExt: {
                    numeric: true,
                    max: 10
                },
                address1: {
                    required: true,
                    max: 40,
                },
                address2: {
                    max: 30
                },
                city: {
                    required: true,
                    alpha_spaces: true,
                    max: 50
                },
                state: {
                    required: true,
                },
                zip: {
                    required: true,
                    digits: 5,
                },
                zipExt: {
                    digits: 4,
                },
                note: {
                    max: 500,
                },
            },
        };
    },
    computed: {
        /* inputs_comp: function() {
            return this.inputs;
        }, */
        shoppingTray_string: function() {
            return Object.keys(this.inputs.shoppingTray.value).length ?  Object.keys(this.inputs.shoppingTray.value).join(', ') : '';
        },
        manualErrors: function() {
            var res = {};

            if (Object.keys(this.inputs.shoppingTray.value).length == 0) {
                res.shoppingTray = true;
            }

            return res;
        }
    },
    beforeCreate: function() {
        if (Object.keys(JSON.parse(sessionStorage.getItem('VueStore-inputs'))).length > 0  ) {
            this.inputs_temp = JSON.parse(sessionStorage.getItem('VueStore-inputs'));
        } else {
            /* if (this.$root.shoppingTray == undefined || this.$root.shoppingTray.length == 0) {
                this.$root.shoppingTray = JSON.parse( sessionStorage.getItem('VueStore-shoppingTray') );
            } */

            this.inputs_temp = {
                shoppingTray: {
                    fullName: 'Shopping Tray',
                    value: this.$root.shoppingTray || JSON.parse( sessionStorage.getItem('VueStore-shoppingTray') ),
                },
                firstName: {
                    fullName: 'First Name',
                    value: '',
                },
                lastName: {
                    fullName: 'Last Name',
                    value: '',
                },
                dob: {
                    fullName: 'Date of Birth',
                    value: '',
                },
                prefix: {
                    fullName: 'Prefix',
                    value: ''
                },
                companyName: {
                    fullName: 'Company Name',
                    value: '',
                },
                numberOfEmployees: {
                    fullName: 'Number of Employees',
                    value: '',
                },
                title: {
                    fullName: 'Title',
                    value: '',
                },
                email: {
                    fullName: 'Email',
                    value: '',
                },
                phone: {
                    fullName: 'Phone',
                    value: '',
                },
                phoneExt: {
                    fullName: 'PhoneExt',
                    value: '',
                },
                address1: {
                    fullName: 'Address1',
                    value: '',
                },
                address2: {
                    fullName: 'Address2',
                    value: '',
                },
                city: {
                    fullName: 'City',
                    value: '',
                },
                state: {
                    fullName: 'State',
                    value: '',
                    code: ''
                },
                zip: {
                    fullName: 'Zip',
                    value: '',
                },
                zipExt: {
                    fullName: 'ZipExt',
                    value: '',
                },
                country: {
                    fullName: 'Country',
                    value: '',
                },
                note: {
                    fullName: 'Note',
                    value: '',
                }
            };

            // this.$set(this, 'inputs', this.inputs_temp);

            /* if (this.inputs_temp.shoppingTray.value == undefined || this.inputs_temp.shoppingTray.value.length == 0) {
                this.inputs_temp.shoppingTray.value = JSON.parse( sessionStorage.getItem('VueStore-shoppingTray') );
                this.$root.shoppingTray = this.inputs_temp.shoppingTray.value;
            } */

        }

        /* if (sessionStorage.getItem('VueStore-inputs').length > 2  ) {
            this.inputs = JSON.parse( sessionStorage.getItem('VueStore-inputs') );
        } */
    },
    mounted: function() {
        /* MAGANGE BREADCRUMBS */
        var breadcrumbs = '' +
            '<li><a href="https://worktray.com/">Home</a></li>' +
            '<li><a href="#/services">Services</a></li>' +
            '<li class="active">Checkout</li>';

        $('#breadcrumbs ul').html(breadcrumbs);

        /* $('body').one('mousemove', function() {
            setTimeout(function() {
                $('#checkout-shoppingTray ul').tooltip('hide');
                $('[data-toggle="tooltip"]').tooltip();

            }, 2000);
        }); */

        /* Hide tooltip on either a click, or after 2 seconds after a mousemove, then cancel the other event */
        $('#checkout-shoppingTray ul').tooltip('show');
        var tooltipMoveTimeout;
        function checkoutTrayTooltip_move () {
            tooltipMoveTimeout =  setTimeout(function() {
                $('#checkout-shoppingTray ul').tooltip('hide');
                $('[data-toggle="tooltip"]').tooltip();
                $('body').off('click', checkoutTrayTooltip_click);

            }, 2000);
        }

        function checkoutTrayTooltip_click () {
            $('#checkout-shoppingTray ul').tooltip('hide');
            $('[data-toggle="tooltip"]').tooltip();
            $('body').off('mousemove', checkoutTrayTooltip_move);
            clearTimeout(tooltipMoveTimeout);
        }

        $('body').one('mousemove', checkoutTrayTooltip_move);
        $('body').one('click', checkoutTrayTooltip_click);
    },
    methods: {
        removeTrayItem: function(e) {
            var el = $(e.currentTarget).text().trim();
            // var index = this.$root.shoppingTray.indexOf( el );

            // remove from root
            this.$delete(this.$root.shoppingTray, el);


            // remove from local
            // console.log({root: this.$root.shoppingTray, inputs: this.inputs.shoppingTray.value});
            // delete this.inputs.shoppingTray.value[el];
            // this.inputs.shoppingTray.value = this.$root.shoppingTray;

            // update session storage
            sessionStorage.setItem('VueStore-shoppingTray', JSON.stringify(this.$root.shoppingTray));
            sessionStorage.setItem('VueStore-inputs', JSON.stringify(this.inputs));

            // remove from DOM
            // $(e.target).parent().remove();

            $(e.target).parents('ul').eq(0).tooltip('hide');

            // this.$forceUpdate();

        },
        stateSelected: function(e) {
            var code = $('option[value="' + $(e.target).val() + '"]').data('code');

            this.inputs.state.code = code;

        },
        onSubmit: function (e) {
            var vThis = this;

            if (Object.keys(this.$root.shoppingTray).length == 0) {

                $([document.documentElement, document.body]).animate(
                    {
                        scrollTop: $('#checkout').offset().top - 100
                    },
                    1000
                );

                return;
            }

            sessionStorage.setItem('VueStore-inputs', JSON.stringify(vThis.inputs));
            this.$validator.validateAll().then(function (valid) {
                // console.log({ valid, vThis});

                /*$.ajax({
                    url: 'http://service.worktray.com/rest/api/Contacts/',
                    dataType : 'JSON',
                    method : 'GET',
                    contentType :'application/json',
                    headers: {
                        // Accept: 'application/json'
                    },
                    beforeSend: function(r){
                        $('#p').html('loading this damn thing...');
                    },
                    success: function(data){
                        $('#p').html('oh damn boy that was a success call');
                        console.log(data);
                    },
                    error: function(e){
                        $('#p').html('haha that was a fail');
                        console.log(e);
                    }

                });*/

                /* $.ajax({
                    url: 'http://service.worktray.com/rest/api/Contacts',
                    dataType : 'JSON',
                    method : 'POST',
                    headers: {
                        // Accept: 'application/json'
                    },
                    beforeSend: function(r){
                        $('#p').html('loading this damn thing...');
                    },
                    contentType :'application/json',
                    data :JSON.stringify(vThis.inputs),
                    success: function(data){
                        $('#p').html('oh damn boy that was a success call');
                        console.log(data);
                    },
                    error: function(e){
                        $('#p').html('haha that was a fail');
                        console.log(e);
                    }

                }); */

                if (valid) {
                    $('#loadCanvas').show();
                    vThis.$http.post(vThis.$root.env.serviceApi + 'rest/api/Contacts/', JSON.stringify(vThis.inputs), {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(function (res) {
                        /* console.log({
                            'returnedData': res
                        }); */

                        $('#loadCanvas').hide();

                        if (res.data.success == true) {
                            /* CLEAR ERRORS */
                            vThis.$toastr.success('Your request has been made.', 'Success!');
                            $('#checkout-errors').html('');


                            vThis.$router.push({
                                name: 'review',
                                params: {
                                    inputs: vThis.inputs,
                                }
                            });
                        } else {
                            var errors_li = '';
                            res.data.errors.forEach(function(el, i ) {
                                errors_li += '<li>' + el + '</li>';
                            });

                            var errors_ul = '<h4 id="checkout-errorTitle">Errors</h4> ' +
                                            '<div class="row"><ul>' + errors_li + '</ul></div>';

                            vThis.$toastr.error(errors_li, 'Error');
                            $('#checkout-errors').html(errors_ul);
                        }
                    }).catch(function(error) {
                        vThis.$toastr.error('Your request could not be made. Please try again in a bit.', 'Error');
                        $('#loadCanvas').hide();

                        /* if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log(error.request);
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('Error', error.message);
                        }
                        console.log(error.config); */

                    });
                }
            });
        }
    }
};
</script>

<style>
    #checkout {
        position: relative;
        display: block;
        height: 95vh;
    }

    #checkout-shoppingTray {
        padding: 10px;
        width: fit-content;
    }

    #checkout-shoppingTray ul li {
        cursor: pointer;
    }

    #checkout-review {
        position: -webkit-sticky;
        position: sticky;
        top: 100px;
        margin-top: 180px;
        padding: 25px 10px;
        border: solid #dddddd .5px;
        border-radius: 50px;
        word-break: break-word;
    }

    #checkout-review h4 {
        text-align: center;
    }

    .checkout-trayItem::after {
        position: relative;
        font-size: 15px;
    }

        /* &#x2612; */

    #checkout-errors ul {
        color: #a94442;
        margin-left: 50px;
    }

    #checkout-errors li {
        list-style-type: disc;
    }

    #checkout-errors li {
        display: list-item;
    }

    #checkout-errorTitle {
        text-align: center;
        /* text-decoration: underline; */
        /* font-weight: bold; */
    }

    button[type=submit] {
        display: block;
        margin: 0 auto;
    }
</style>