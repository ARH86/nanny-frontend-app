<template>
  <div class="JobsShow">

    <div v-for="job_activity in job.job_activities">
      <h4>{{ job_activity.id }}</h4>
      <h4>{{ job_activity.start_time }}</h4>
      <h4>{{ job_activity.duration }} Minutes</h4>
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
            job: [],


                   
                  
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/jobs/" + this.$route.params.id)
    .then(response => {
      this.job = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>