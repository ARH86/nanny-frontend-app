<template>
  <div class="home">
    <div v-for="job in jobs">
      <h5 class="card-title">Job id: {{ job.job_id }}</h5>
      <h5 class="card-title">Start time: {{ job.start_time }}</h5>
      <h5 class="card-title">End time: {{ job.end_time }}</h5>
      <h5 class="card-title">Child id: {{ job.child_id }}</h5>
    </div>
  </div>
</template>

<style>
</style>

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
  methods: {},
  computed: {}
};
</script>
