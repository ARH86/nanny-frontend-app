<template>
  <div class="activitiesnew">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Create a new activity</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Job id:</label>
          <input type="text" class="form-control" v-model="jobId">
        </div>
        <div class="form-group">
          <label>Activity</label>
          <input type="text" class="form-control" v-model="activityId">
          <h6>Please choose the activity</h6>
        </div>
        <div class="form-group">
          <label>Start Time</label>
          <input type="text" class="form-control" v-model="startTime">
          <h6>Please enter the date and time</h6>
          <div class="form-group">
            <label>Duration</label>
            <input type="text" class="form-control" v-model="duration">
          </div>
          <input type="submit" class="btn btn-primary" value="Submit">
        </div>
      </form>
    </div>
  </div>
</template>

<style>
</style>

<script>
  var axios = require ("axios");

export default {
  data: function() {
    return {
            job_id: "",
            activity_id: "",
            start_time: "",
            duration: "",
            errors: []
    };
  },
  created: function() {
    var params = {
                  job_id: this.job_id,
                  activity_id: this.activity_id,
                  start_time: this.start_time,
                  duration: this.duration

    };
    axios
    .post("http://localhost:3000/api/job_activities", params)
    .then(response => {
      this.$router.push("/jobactivities/" + response.data.id);
    });
    // .catch(error => {
    //   this.errors = error.response.data.errors;
    // });
  },
  methods: {},
  computed: {}
};
</script>