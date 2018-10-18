<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
  body {
    background-color: lightblue;
    

  }

</style>

<script>
  var axios = require ('axios');

export default {
  data: function() {
    return {
      message: "The Caretaker App"
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/jobs")
    .then(function(response) { 
      this.jobs = response.data;
    }.bind(this));

  },
  methods: {},
  computed: {}
};
</script>
