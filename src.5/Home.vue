<template>
  <div class="container-fluid">

    <div id="home" class="position-relative">
        <!-- Content -->
        <div class="row" id='eligibilityCheck'>
          <div class="col-lg-12">
            <!-- <div class="d-flex align-items-center flex-wrap">  
                        <a class="btn btn-soft-primary btn-wide transition-3d-hover" href="wizard">Order
                        Now</a> 
            </div>-->
            <article class="card border-0 bg-primary text-white shadow-primary-lg">
              <div class="card-body p-6">
                <!-- <span class="btn btn-lg btn-icon btn-soft-light rounded-circle mb-9">
                            <img class="img-fluid rounded-circle" src="/img/logo.jpg" alt="Image Description">
                </span>-->
                <!-- <small class="d-block text-white-70 text-uppercase mb-1">Hookah Order</small> -->
                <h3 class="h5 mb-3">Please enter your zip code to check shipping availability.</h3>
                <!-- Form Group -->
                <div class="js-form-message form-group">
                  <label class="form-label" for="zipCodeCheck">Zip Code</label>
                  <input
                    type="number"
                    class="form-control"
                    maxlength="5"
                    max="5"
                    name="zipCode"
                    id="zipCodeCheck"
                    placeholder="ZipCode"
                    aria-label="ZipCode"
                    required="true"
                    data-msg="Please enter a valid Zip Code."
                    autocomplete="off"
                    data-error-class="u-has-error"
                    data-success-class="u-has-success"
                    @change="onZipChange "
                  >
                </div>

                <div class="js-form-message form-group row ml-0 mr-0">
                  <input
                    type="checkbox"
                    class="form-control col-2"
                    name
                    id="ageCheck"
                    data-error-class="u-has-error"
                    data-success-class="u-has-success"
                  >
                  
                  <label
                    class="form-label col-10 m-0 p-3"
                    for="ageCheck"
                  >I am at least 21 years old.</label>
                </div>

                <div id="error_zipcode" class="alert alert-danger d-none"></div>
                <!-- End Form Group -->
                <a
                  class="btn btn-success btn-pill transition-3d-hover w-100"
                  @click="onZipChange"
                  id="btn_continue"
                  href="#"
                >Continue</a>
              </div>
            </article>
          </div>
        </div>
        <!-- End Content -->
    </div>

  </div>
</template>


<script>
import router from "./router";
export default {
  name: "home",
  data() {
    return {
      title: "App"
    };
  },
  mounted() {
    $("#content").css("background-image", "url(/img/shisha/background2.jpg)");
    $("#content").css("background-size", "cover");
    $("#content").css("background-position", "50% 0");
  },
  destroyed() {
    $("#content").css("background-image", "");
    $("#content").css("background-size", "");
    $("#content").css("background-position", "initial");
  },
  methods: {
    onZipChange(e) {
      var zipCodes = [
        "90039", "91011", "91020", "91046", "91201", "91202", "91203", "91204", "91205", "91206", "91207", "91208", "91210", "91214"
      ];

      var zipCodeValid = zipCodes.includes(e.target.value);
      if (zipCodeValid || true) {
        // TODO: remove  ' || true' when no longer testing
        $("#error_zipcode").text("");
        $("#error_zipcode").addClass("d-none");
        router.push("wizard");
      } else {
        $("#error_zipcode").removeClass("d-none");
        $("#error_zipcode").text(
          "Sorry! The Zip Code you provided is not valid for shipment."
        );
        return false;
      }
    }
  }
};
</script>

<style>
#home {
    margin: 0 auto;
}

#eligibilityCheck {
    width: 400px;
    margin: 0 auto;
}

#eligibilityCheck article {
    opacity: .9;
}

input[type="checkbox"] {
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  /* background: #34495E; */
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  box-sizing: content-box;
  width: 50px;
  height: 50px;
  border-width: 0;
  transition: all 0.3s linear;
}
input[type="checkbox"]:checked {
  background-color: #00c9a7;
}
input[type="checkbox"]:focus {
  outline: 0 none;
  box-shadow: none;
}
</style>
