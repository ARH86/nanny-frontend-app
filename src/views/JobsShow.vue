<template>
  <div class="JobsShow">
    <ul>
    <h1>{{ job.id }}</h1>
    <h1>{{ job.job_activities }}</h1>
    <h4>{{ job.job_activities }}</h4>
    </ul>
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