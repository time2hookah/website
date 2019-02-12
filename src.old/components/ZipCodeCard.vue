<template>
  <div id="homeApp" class='container-fluid'>

    <div id="home"> 
  
        <!-- Hero Section -->
        <div class="d-lg-flex position-relative col-lg-6 col-md-6">
            <div class="container ">
                <!-- Content -->
                <div class="row">
                    <div class="col-lg-12"> 
                    <!-- <div class="d-flex align-items-center flex-wrap">  
                        <a class="btn btn-soft-primary btn-wide transition-3d-hover" href="wizard">Order
                        Now</a> 
                    </div> -->
                    <article class="card border-0 bg-primary text-white shadow-primary-lg transition-3d-hover mb-7 mb-md-0">
                        <div class="card-body p-6">
                        <!-- <span class="btn btn-lg btn-icon btn-soft-light rounded-circle mb-9">
                            <img class="img-fluid rounded-circle" src="/img/logo.jpg" alt="Image Description">
                        </span>  -->
                        <small class="d-block text-white-70 text-uppercase mb-1">Hookah Order</small>
                        <h3 class="h5 mb-3">Please enter your zip code to check shipping availability.</h3>
                        <!-- Form Group -->
                        <div class="js-form-message form-group">
                            <label class="form-label" for="signinSrEmail">Zip Code</label>
                            <input type="number" class="form-control"  maxlength="5" max="5"
                            name="email" id="zipCodeCheck" 
                            placeholder="ZipCode" aria-label="ZipCode" 
                            required="true" data-msg="Please enter a valid Zip Code." autocomplete="off"
                            data-error-class="u-has-error" 
                            data-success-class="u-has-success"
                            @change='onZipChange'
                            >
                        </div>
                        <div id="error_zipcode" class="alert alert-danger d-none"> </div>
                        <!-- End Form Group -->
                        <a class="btn btn-sm btn-soft-white btn-pill pull-right transition-3d-hover" @click='onZipChange' id="btn_continue" href="#">Continue</a>
                        </div>
                    </article>
                    </div>
                </div>
                <!-- End Content --> 
            </div>
        </div>
        <!-- End Hero Section -->

    </div>
      
  </div>
</template>


<script>
import router from "../router";
export default {
  name: 'ZipCodeCard',
  data () {
    return {
      title: 'ZipCodeCard'

    }
  },
  created () {
    
  },
  methods: {
      onZipChange (e) {
            var zipCode = ["90039", "91011", "91020", "91046", "91201", "91202", "91203", "91204", "91205", "91206", "91207", "91208", "91210", "91214"];
             
            var zipCodeContain = zipCode.includes(e.target.value);      
            if(zipCodeContain){
                $("#btn_continue").prop('disabled', false);
                $("#error_zipcode").addClass("d-none")
                $("#error_zipcode").text("");
                // window.location.href = "wizard";
                // this.data.showZipCode = false;
                // this.data.showWizzard = true;
                router.replace('wizard');
            }else{
                $("#error_zipcode").removeClass("d-none");
                $("#btn_continue").prop('disabled', true);
                $("#error_zipcode").text("Sorry! the Zip Code you provided is not valid for shippment.");
                return false;
            }

            
        
        
        }
    }
}
</script>

<style>
#vueApp {
  padding: 10px 0;
}

 
</style>
