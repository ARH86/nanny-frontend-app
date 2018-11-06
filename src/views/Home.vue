<template>
  <div class="home">
    <div class="entry">
      <form>
       <br>
       <h4>Schedule an event to track</h4>
       <div class="form-group">
          <select v-model="child_id">
            <option v-for="child in children" v-bind:value="child.id">
              {{ child.name}}
            </option>
          </select>
          <br>
          <br>
          <div class="form-group">
             <input type="datetime-local" v-model="start_time">    
          </div>
            <div class="form-group">
              <input type="datetime-local" v-model="end_time">
            </div>
             <div>
                <button type="submit" v-on:click="submit()">Submit</button>
                |
                <input type="reset">      
             </div>
             <br>
        </div>
      </form>
    </div>

    <div v-for="job in jobs">
      <router-link v-bind:to="'/jobs/' + job.id">Click Here</router-link>
      |
      <button v-bind:to="'/jobs/' + job.id">Remove</button>
      <h5 class="card-title">Job id: {{ job.id }}</h5>
      <h5 class="card-title">Start time: {{ job.start_time }}</h5>
      <h5 class="card-title">End time: {{ job.end_time }}</h5>
      <h5 class="card-title">Child id: {{ job.child_id }}</h5>
    </div>
    <br>
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
      jobs: [],
      children: [],
      start_time: "",
      end_time: "",
      child_id: ""

    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/jobs")
    .then(response => {
      this.jobs = response.data;
    });
    axios
    .get("http://localhost:3000/api/children")
    .then(response => {
      this.children = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
                    start_time: this.start_time,
                    end_time: this.end_time,
                    child_id: this.child_id,
                    job_id: this.job_id
      };
      axios
      .post("http://localhost:3000/api/jobs", params)
      .then(response => {
        location.reload();
      })
      .catch(error => {
        this.error = error.response.data.errors;
      });
    }
   
  },
  computed: {}
};
</script>
