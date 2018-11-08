   
<template>
  <div class="JobsShow">
    <br>
    <div class="entry">
      <h4> Add New Activity:</h4>
      <form>
        <br>
        <h5>Select Activity:</h5>
          <div class="form-group">
            <!-- <input type="text" v-model="job_activity" placeholder="name">
            {{ job_activity.name }} -->

        <select v-model="activity_id">
            <option v-for="activity in activities" v-bind:value="activity.activity_id">
              {{ activity.name }}
            </option>
        </select>

          </div>
          <br>
          <div class="form-group"> 
            <h5>Duration:</h5>    
            <select name="duration" v-bind:value="duration" v-model="duration">
                <option value=15>15</option>
                <option value=30>30</option>
                <option value=45>45</option>
                <option value=60>1 hour</option>
                <option value=90>1 1/2 hours</option>
                <option value=120>2 hours</option>
                <option value=150>2 1/2 hours</option>
                <option value=180>3 hours</option>
            </select>
            <br>
          </div>   
          <br>
          <div class="form-group" > 
            <h5>Enter Start Date: </h5>
            <input type="datetime-local" v-model="start_time"> 
          </div>
          <br>
          <br>
          <div>
            <button type="submit" v-on:click="submit()">Submit</button> 
            | 
            <input type="reset">
          </div>
      </form>
    </div>
    <br>
    <br>
    <div v-for="job_activity in job.job_activities">
      <ul>
        <li>Activity: {{ job_activity.activities.name}} </li>
        <li>Duration: {{ job_activity.duration }} Minutes </li>
        <li>{{ job_activity.activities.activity_id}} </li>
        <br>
        <li>{{ job_activity.id }}</li>
        <li>Start Time: {{ job_activity.start_time }} </li>
      </ul>
    </div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Remove Job
    </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" v-on:click="remove()" >Delete</button>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>
  

<style>
    li {
      display: inline;
      
    }
    .entry {
        padding-left: 20px;

    }
   
    
</style>
  <body>
  </body>

<script>
  var axios = require('axios');

export default {
  data: function() {
    return {
            job: [], 
            activities: [],
            duration: "",
            start_time: "",
            activity_id: ""                
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/jobs/" + this.$route.params.id)
    .then(response => {
      this.job = response.data; 
    });
    axios
    .get("http://localhost:3000/api/activities")
    .then(response => {
      this.activities = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
                    duration: this.duration,
                    start_time: this.start_time,
                    activity_id: this.activity_id,
                    job_id: this.job.id
      };
      axios 
      .post("http://localhost:3000/api/job_activities", params)
      .then(response => {
        location.reload();
        // this.$router.push("/job_activities/" + response.data.id);
      })
      .catch(error => {
        this.error = error.response.data.errors;
      });
    },

    remove: function() {
      axios
      .delete("http://localhost:3000/api/jobs/" + this.$route.params.id)
      .then(response => {
        this.$router.push("/");
      })
    },
  },
  computed: {}
};
</script>