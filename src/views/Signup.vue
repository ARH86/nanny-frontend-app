
  

<template>
  <div class="signup">
    <div id="signup_background">
      <div class="container">
        <div class="card" id="signup_form">
        <form v-on:submit.prevent="submit()">
          <h1 id="signup_title">Signup</h1>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="form-group">
            <label>Name:</label> 
            <input type="text" class="form-control" v-model="name">
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" class="form-control" v-model="email">
          </div>
            <div class="form-group">
              <label>Password:</label>
              <input type="password" class="form-control" v-model="password">
            </div>
              <div class="form-group">
                <label>Password confirmation:</label>
                <input type="password" class="form-control" v-model="passwordConfirmation">
              </div>
              <br>
              <input type="submit" class="btn btn-primary" value="Submit">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <style>
     div.signup {
                background-color: rgb(46, 60, 67);
                padding-top: 150px;
                padding-bottom: 200px;
                padding-left: auto;
                padding-right: auto;
                color: rgb(234, 112, 102);
              
                }
    #signup_background  {
        background-color: rgb(46, 60, 67);
                    }
          #signup_title {
                        font-size: 50px;
                        padding-bottom: 25px;
                        color: rgb(234, 112, 102);
                        text-shadow: 5px 4px 0px rgba(0, 0, 0, 0.55);
                        font-style: 
          }

  </style>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("http://localhost:3000/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
