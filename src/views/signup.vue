<template>
  <div id="signup_page" class="container-fluid">
    <div class="row">
      <div class="col-md-3"></div>

      <div class="col-md-6">
        <form
          
          class="js-validate mt-5"
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
            <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
            </p>
          <!-- <ul>
            <li :key="i" v-for="(error, i) in errors.all()">{{ error }}</li>
          </ul> -->
          <!-- <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
          </p>

          <ul id="errorMsg">
            <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
          </ul> -->
          <!-- </p> -->
          <!-- Form Group -->
          <div class="js-form-message form-group">
            <label class="form-label" for="signinFirstName">First Name</label>
            <input
              type="text"
              
              v-validate="'required'"
              v-model="firstName"
              class="form-control"
              name="firstName"
              id="signinFirstName"
              placeholder="First Name"
              aria-label="first name"  
            />
            <span class="text-danger">{{ errors.first('firstName') }}</span>
          </div>
          <!-- End Form Group -->
          <!-- Form Group -->
          <div class="js-form-message form-group">
            <label class="form-label" for="signinLastName">Last Name</label>
            <input
              type="text"
              v-model="lastName"
              class="form-control"
              name="lastName"
              id="signinLastName"
              placeholder="Last Name" 
              v-validate="'required'"
            />
            <span class="text-danger">{{ errors.first('lastName') }}</span>
          </div>
          <!-- End Form Group -->
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
              v-validate="'required|email'"
            />
            <span class="text-danger">{{ errors.first('email') }}</span>
          </div>
          <!-- End Form Group -->
          <!-- Form Group -->
          <div class="js-form-message form-group">
            <label class="form-label" for="signinSrPassword">Password</label>
            <input
              type="password"
              v-model="password"
              ref="password"
              class="form-control"
              name="password"
              id="signinSrPassword"
              placeholder="********" 
              v-validate="'required|min:8'"
            />
            <span class="text-danger">{{ errors.first('password') }}</span>
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
              v-validate="'required|min:8|confirmed:password'"
            />
            <span class="text-danger">{{ errors.first('confirmPassword') }}</span>
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
          <div class="row">
            <div class="col-md-8">
              <span class="small text-muted">Already have an account?</span>
              <a class="small" href="login.html">Login</a>
            </div>
            <div class>
              <button
                type="button" 
                @click="submitSignup"
                class="btn btn-primary transition-3d-hover pull-right"
              >
                Sign Up
              </button>
            </div>
          </div>
          <!-- End Button -->
        </form>
      </div>
    </div>
  </div>
</template>

<script> 
export default {
  name: "signup",
  data() {
    return {
      // errors: [],
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      conPassword: null
    };
  },
  methods: {
    submitSignup(){
      let self = this;
      this.$validator.validateAll().then((result) => {
        if (result) {  
          this.$http.post( "http://localhost:3001/api/users/",{
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              password:this.password
            }
          ).then(function(response) {
            // handle success
            console.log("user save: ", response); 
             
            self.$router.push("wizard");  
             
          }).catch(function(error) {
            // handle error
            console.log(error);
          }).then(function() {
            // always executed
            
          });

          return;
        }

      });

      
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
