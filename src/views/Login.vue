
<template>
  <div class="wrapper">
    <body>
      <div id="login">
        <div class="container">
          <form v-on:submit.prevent="submit()">
            <br>
            <h1 id="login_title">Login</h1>
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
            <br>
            <input type="submit" class="btn btn-primary" value="Submit">
          </form>
        </div>
      </div>
    </body>
  </div>


</template>
<style>
    #login {
            padding-top: 150px;
            padding-bottom: 200px;
            padding-left: auto;
            padding-right: auto;
            background-color: rgb(46, 60, 67);
            color: rgb(234, 112, 102);
            }
    #login_title {
                  color: rgb(234, 112, 102);
                  font-size: 50px;
                  text-shadow: 5px 4px 0px rgba(0, 0, 0, 0.55);
    }
</style>

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
