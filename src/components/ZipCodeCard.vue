<template>
  <div id="eligibilityCard" class="container-fluid">
    <!-- Content -->
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
        <h3 class="h5 mb-3">
          Please enter your zip code to check shipping availability.
        </h3>
        <!-- Form Group -->
        <div id="zipCodeCheck" class="js-form-message form-group">
          <!-- <label class="form-label" for="zipCodeCheck">Zip Code</label> -->
          <input
            type="text"
            class="form-control"
            maxlength="5"
            name="zipCodeCheck"
            placeholder="ZipCode"
            aria-label="ZipCode"
            required="true"
            data-msg="Please enter a valid Zip Code."
            autocomplete="off"
            data-error-class="u-has-error"
            data-success-class="u-has-success"
            @change="onZipChange"
          />
        </div>

        <div id="ageCheck" class="js-form-message form-group">
          <input
            type="checkbox"
            class="form-control"
            name="ageCheck"
            data-error-class="u-has-error"
            data-success-class="u-has-success"
          />

          <label class="form-label col m-0" for="ageCheck"
            >I am at least 21 years old.</label
          >
        </div>

        <div id="error_zipcode" class="alert alert-danger d-none"></div>
        <!-- End Form Group -->
        <a
          class="btn btn-success btn-pill transition-3d-hover w-100"
          @click="onZipChange"
          id="btn_continue"
          href="#"
          >Continue
        </a>
      </div>
    </article>
    <!-- End Content -->
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "EligibilityCard",
  data() {
    return {
      title: "EligibilityCard"
    };
  },
  mounted() {
    // $("#content").css("background-image", "url(/img/hookahs/background2.jpg)");
    // $("#eligibilityCard").css("background-size", "cover");
    // $("#eligibilityCard").css("background-position", "50% 0");
  },
  destroyed() {
    // $("#eligibilityCard").css("background-image", "");
    // $("#eligibilityCard").css("background-size", "");
    // $("#eligibilityCard").css("background-position", "initial");
  },
  methods: {
    onZipChange(e) {
      var zipCodes = [
        "90039",
        "91011",
        "91020",
        "91046",
        "91201",
        "91202",
        "91203",
        "91204",
        "91205",
        "91206",
        "91207",
        "91208",
        "91210",
        "91214"
      ];

      var zipCodeValid = zipCodes.includes(e.target.value);

      // TODO: remove  ' || true' when no longer testing
      // eslint-disable-next-line no-constant-condition
      if (zipCodeValid ) {
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
.flexHamlet {
  display: flex;
}

#eligibilityCard {
  padding: 25px;
  background-image: url("../assets/img/hookahs/sixFruitHookahs.png");
  background-size: cover;
  width: 100%;
  height: 100%;
}

#eligibilityCard article {
  opacity: 0.9;
  width: 350px;
}

@media (max-width: 600px) {
  #eligibilityCard {
    background-image: none;
    padding: 0;
  }

  #eligibilityCard article {
    margin: 0 auto;
  }
}

#ageCheck {
  display: flex;
  align-items: center;
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
