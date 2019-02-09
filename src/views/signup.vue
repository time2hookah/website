<template>
  <div id="signup_page" class="container-fluid">
    <div class="row">
      <form
        @submit.prevent="checkForm"
        class="js-validate col-md-6 m-auto p-5"
        novalidate="novalidate"
        id="signupForm"
      >
        <!-- Title -->
        <div class="mb-7">
          <h1 class="h3 text-primary font-weight-normal mb-0">
            Welcome to
            <span class="font-weight-semi-bold">Time 2 Hookah</span>
          </h1>
        </div>
        <!-- End Title -->
        <p v-if="errors.items.length">
          <b>Please correct the following error(s):</b>
        </p>

        <ul id="errorMsg">
          <li v-for="(error, i) in errors.items" :key="i">{{ errors }}</li>
        </ul>
        <!-- </p> -->
        <!-- Form Group -->
        <div class="js-form-message form-group">
          <label class="form-label" for="signinSrEmail">Email address</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            name="email"
            id="signinSrEmail"
            placeholder="Email address"
            aria-label="Email address"
            data-msg="Please enter a valid email address."
            data-error-class="u-has-error"
            data-success-class="u-has-success"
            required
          />
        </div>
        <!-- End Form Group -->
        <!-- Form Group -->
        <div class="js-form-message form-group">
          <label class="form-label" for="signinSrPassword">Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            name="password"
            id="signinSrPassword"
            placeholder="********"
            aria-label="********"
            data-msg="Your password is invalid. Please try again."
            data-error-class="u-has-error"
            data-success-class="u-has-success"
            required
          />
        </div>
        <!-- End Form Group -->
        <!-- Form Group -->
        <div class="js-form-message form-group">
          <label class="form-label" for="signinSrConfirmPassword"
            >Confirm password</label
          >
          <input
            type="password"
            v-model="conPassword"
            class="form-control"
            name="confirmPassword"
            id="signinSrConfirmPassword"
            placeholder="********"
            aria-label="********"
            data-msg="Password does not match the confirm password."
            data-error-class="u-has-error"
            data-success-class="u-has-success"
            required
          />
        </div>
        <!-- End Form Group -->
        <!-- Checkbox -->
        <div class="js-form-message mb-5">
          <div
            class="custom-control custom-checkbox d-flex align-items-center text-muted"
          >
            <input
              type="checkbox"
              class="custom-control-input"
              id="termsCheckbox"
              name="termsCheckbox"
              data-msg="Please accept our Terms and Conditions."
              data-error-class="u-has-error"
              data-success-class="u-has-success"
              required
            />
            <label class="custom-control-label" for="termsCheckbox">
              <small>
                I agree to the
                <a class="link-muted" href="../pages/terms.html"
                  >Terms and Conditions</a
                >
              </small>
            </label>
          </div>
        </div>
        <!-- End Checkbox -->
        <!-- Button -->
        <div>
          <div>
            <button
              type="submit"
              class="btn btn-primary transition-3d-hover pull-right"
            >
              Sign Up
            </button>
          </div>
          <div>
            <span class="small text-muted">Already have an account?</span>
            <a class="small" href="login.html">Login</a>
          </div>
        </div>
        <!-- End Button -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      conPassword: null
    };
  },
  methods: {
    checkForm: function() {
      if (this.email && this.password && this.conPassword) {
        return true;
      }

      let errors = this.errors.items;
      errors = [];

      if (!this.email) {
        errors.push("Email is required.");
      }
      if (!this.password) {
        errors.push("Password is required.");
      }
      if (!this.conPassword) {
        errors.push("Confirm Password is required.");
      }
    }
  }
};
</script>

<style>
#signupForm {
  background-color: aliceblue;
  padding: inherit;
}

#errorMsg {
  list-style-type: none;
  color: red;
}
</style>
