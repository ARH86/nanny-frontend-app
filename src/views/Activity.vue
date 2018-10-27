<template>
  <div class="activity">
    <div v-for="job_activity in job_activities">
      <h5 class="card-title">Activitiy id: {{ job_activity.job_activity_id }}</h5>
      <h5 class="card-title">Start time: {{ job_activity.start_time }}</h5>
      <h5 class="card-title">Duration: {{ job_activity.duration }}</h5>
      <h5 class="card-title">Child id: {{ job_activity.job_id }}</h5>
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
      job_activities: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/job_activities")
    .then(response => {
      this.job_activities = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>