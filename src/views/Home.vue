<template>
  <div class="home">
    <div v-for="job in jobs">
      <router-link v-bind:to="'/jobs/' + job.id">Click Here</router-link>
      <h5 class="card-title">Job id: {{ job.id }}</h5>
      <h5 class="card-title">Start time: {{ job.start_time }}</h5>
      <h5 class="card-title">End time: {{ job.end_time }}</h5>
      <h5 class="card-title">Child id: {{ job.child_id }}</h5>
    </div>
  </div>
</template>

<style>
</style>
  <body>
    



  </body>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      jobs: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/jobs")
    .then(response => {
      this.jobs = response.data;
    });
  },
  methods: {
   
  },
  computed: {}
};
</script>
