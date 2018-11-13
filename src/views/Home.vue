<template>
  <div class="home">
    <div>
        <!-- make message to about the feed or scheduling a job -->
    </div>
      <div class="col-sm-4">   
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
                  <button type="submit" class="btn btn-primary" v-on:click="submit()">Submit</button>
                  |
                  <input class="btn btn-primary" type="reset">      
                </div>
                <br>
            </div>  
        </form>
      </div>
    <div class="contanier"> 
      <div class="col-lg-6">
        <div id="home_jobs_feed">
          <div v-for="job in jobs">
            <br>
            <h4><router-link class="card-title" v-bind:to="'/jobs/' + job.id">Job: {{ job.id }}</router-link></h4>
              <h4 class="card-title">Start time: {{ job.start_time }}</h4>
              <h4 class="card-title">End time: {{ job.end_time }}</h4>
              <h4 class="card-title">Child Name: {{ job.child_name }}</h4> 
              <h4 class="card-title">Child id: {{ job.child_id }}</h4>
              -------------------------------------------------------------
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>
<style>
  #home_jobs_feed {
      margin-left: auto;
      margin-right: auto;
      width: 600px;
      height: 500px;
      overflow: scroll;
      font-size: 20px;
      font-style: serif;
      text-align: center;
      border-style: double;
      border-color: rgb(234, 112, 102);
      border-width: 10px;
      font-family: "Times New Roman", Times, serif;
      padding-top: 20px;
      background: rgb(132, 190, 214);
      background: -moz-linear-gradient(30deg, rgb(132, 190, 214) 20%, rgb(100, 150, 180) 59%);
      background: -webkit-linear-gradient(30deg, rgb(132, 190, 214) 20%, rgb(100, 150, 180) 59%);
      background: -o-linear-gradient(30deg, rgb(132, 190, 214) 20%, rgb(100, 150, 180) 59%);
      background: -ms-linear-gradient(30deg, rgb(132, 190, 214) 20%, rgb(100, 150, 180) 59%);
      background: linear-gradient(120deg, rgb(132, 190, 214) 20%, rgb(100, 150, 180) 59%);


      }
      #addJob {
              margin-right: 50px;
              margin-left: 50px;
              padding-left: 10px;
              width: 300px;
              border: double;
              border-width: 5px;
              border-color: rgb(234, 112, 102);
              background: rgb(239, 194, 74);
              background: -moz-linear-gradient(30deg, rgb(239, 194, 74) 30%, rgb(181, 213, 106) 70%);
              background: -webkit-linear-gradient(30deg, rgb(239, 194, 74) 30%, rgb(181, 213, 106) 70%);
              background: -o-linear-gradient(30deg, rgb(239, 194, 74) 30%, rgb(181, 213, 106) 70%);
              background: -ms-linear-gradient(30deg, rgb(239, 194, 74) 30%, rgb(181, 213, 106) 70%);
              background: linear-gradient(120deg, rgb(239, 194, 74) 30%, rgb(181, 213, 106) 70%);


      }
      div.home {
        background-color: rgb(46, 60, 67);
        /*column-count: 3;*/
        padding-top: 80px;
        padding-bottom: 500px;
        
        
      }
/*
      div.home_entry {
                                          height: 450px;
                                          width: 300px;
                                          margin-top: 125px;
                                          margin-left: 15px;
                                          padding-top: 20px;
                                          padding-bottom: 200px;
                                          padding-left: 20px;
                                          padding-right: 10px;
                                          font-style: serif;
                                          border: groove;
                                          border-width: 10px;
                                          border-color: rgb(233, 119, 173);
                                          background-color: rgb(234, 112, 102);
                                        }*/

                          



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
      jobFilter: "",
      child_name: ""

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
