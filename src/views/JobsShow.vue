   
<template>
  <div class="JobsShow">
        <div v-for="job_activity in job.job_activities">
          <ul>
            <li>Activity: {{ job_activity.activities.name}} </li>
            <li>Duration: {{ job_activity.duration }} Minutes </li>
            <li>{{ job_activity.activities.activity_id}} </li>
            <br>
            <li>{{ job_activity.id }}</li>
            <li>{{ job_activity.start_time }} </li>
          </ul>
        </div>
      </div>
</template>
  

<style>
    li {
      display: inline;
      
    }
    
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