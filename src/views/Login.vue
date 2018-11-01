
<template>
  <!-- ====================================
  ——— LOGIN MODAL
  ===================================== -->
<!--   <div class="modal fade customModal" id="loginModal" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="panel panel-default formPanel">
          <div class="panel-heading bg-color-1 border-color-1">
            <h3 class="panel-title">Login</h3>
          </div>
          <div class="panel-body">
            <form action="#" method="POST" role="form">
              <div class="form-group formField">
                <input type="text" class="form-control" placeholder="User name">
              </div>
              <div class="form-group formField">
                <input type="password" class="form-control" placeholder="Password">
              </div>
              <div class="form-group formField">
                <input type="submit" class="btn btn-primary btn-block bg-color-3 border-color-3" value="Log in">
              </div>
              <div class="form-group formField">
                <p class="help-block"><a href="#">Forgot password?</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>









</template>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("http://localhost:3000/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
