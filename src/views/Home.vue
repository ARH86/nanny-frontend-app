<template>
  <div class="home">
    <div>
        <!-- make message to about the feed or scheduling a job -->
    </div>
    <div class="entry">
      <div column>   
        <form id="addJob">
         <br>
         <h4>Schedule an event to track</h4>
         <div class="form-group">
            <select v-model="child_id" >
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
    </div>
    <div column="6">
      <div class="jobs_feed">
        <div v-for="job in jobs">
          <router-link class="card-title" v-bind:to="'/jobs/' + job.id">Job: {{ job.id }}</router-link>
            <h4 class="card-title">Start time: {{ job.start_time }}</h4>
            <h4 class="card-title">End time: {{ job.end_time }}</h4>
            <h4 class="card-title">Child id: {{ job.child_id }}</h4>
           <!--  <h4 class="card-title">Child Name: {{ child.name }}</h4> ****add name *** -->
        </div>
      </div>
    </div>
    <br>
  </div>
</template>
<style>
  div.jobs_feed {

      margin-left: auto;
      margin-right: auto;
      background-color: rgb(132, 190, 214);
      width: 600px;
      height: 500px;
      overflow: scroll;
      font-style: serif;
      text-align: center;
      border-style: double;
      border-color: rgb(234, 112, 102);
      border-width: 10px;
      font-family: "Times New Roman", Times, serif;


      }
      #addJob {
              padding-right: 10px;
              padding-left: 10px;
              width: 300px;
              border: double;
              border-width: 5px;
              border-color: rgb(234, 112, 102);
              background: rgb(239, 194, 74);


      }
      div.home {
        background-color: rgb(46, 60, 67);
        column-count: 3;
        padding-top: 100px;
        padding-bottom: 250px;
      }



</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      jobs: [],
      children: [],
      start_time: "",
      end_time: "",
      child_id: "",
      jobFilter: ""

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
