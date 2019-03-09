<template>
  <div id="signup_page" class="container-fluid">
    <div class="row">
      <div class="col-md-3"></div>

      <div class="col-md-6">
        <form
           
          class="js-validate mt-5"
          novalidate="novalidate"
          id="loginForm"
        >
         <!-- Title -->
          <div class="mb-7">
            <h1 class="h3 text-primary font-weight-normal mb-0">
              Login
              <span class="font-weight-semi-bold"> </span>
            </h1>
          </div> 
          
          <!-- Form Group -->
          <div class="js-form-message form-group">
           
            <label class="form-label" for="loginEmail">Email address</label>
            <input
              v-validate="'required|email'" 
              type="email"
              v-model="email"
              class="form-control"
              name="email"
              id="loginEmail"
              placeholder="Email address" 
            />
                <span class="text-danger">{{ errors.first('email') }}</span>
             
          </div>
          <!-- End Form Group -->
          <!-- Form Group -->
          <div class="js-form-message form-group">
            <label class="form-label" for="signinSrPassword">Password</label>
            <input
              type="password"
              v-validate="'required|min:8'" 
              v-model="password"
              class="form-control"
              name="password"
              id="signinSrPassword"
              placeholder="********" 
            />
            <span class="text-danger">{{ errors.first('password') }}</span>
          </div>
          <!-- End Form Group --> 
          <!-- Button -->
          <div class="row"> 
            <div class="">
              <button
                type="button"
                @click="submitLogin"
                class="btn btn-primary transition-3d-hover"
              >
                Login
              </button><br>
            </div>
          </div>
          <!-- End Button -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "login",
  computed: ({
    ...mapState({
      token : 'token'
    })
  }),
  data() {
    return {
      // errors: [], 
      email: null,
      password: null, 
    };
  },
  methods: {
    submitLogin(){
      let self = this;
      // const { email, password } = this
      this.$validator.validateAll().then((result) => {
        if (result) { 
          this.$http.post( "http://localhost:3001/api/auth/",{
              
              email: this.email,
              password:this.password
            }
          ).then(function(response) {
            // handle success
            console.log("user save: ", response); 
            // self.token = response.data;
            // token
            self.$store.commit('SAVE_TOKEN', response.data);
            
            
             
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

      // this.errors = [];
       
      // if (!this.email) {
      //   this.errors.push("Email is required.");
      // }
      // if (!this.password) {
      //   this.errors.push("Password is required.");
      // }

      if(!this.errors.length){
          
          //   this.$http({
          //   method: "post",
          //   url: "http://localhost:3001/api/users/",
          //   Data: {
          //     isAdmin: true ,
          //     firstName:"Bedo",
          //     lastName: "Garabedian",
          //     email: "cfbedo@yahoocom",
          //     password:"passTest"
          //   }
          // })
          // .then(function(response) {
          //   // handle success
          //   console.log("user save: ", response);
          // })
          // .catch(function(error) {
          //   // handle error
          //   console.log(error);
          // })
          // .then(function() {
          //   // always executed
          // }); 
      }
    }
  }
};
</script>

<style>
#loginForm {
  background-color: aliceblue;
  padding: inherit;
}

#errorMsg {
  list-style-type: none;
  color: red;
}
</style>
