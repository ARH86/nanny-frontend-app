   
<template>
  <div id="JobsShow">
    <br>
    <h1></h1>
    <div id="entry">
      <div class="col-lg-10">
        <div>
          <h4 id="activityAddName"> Add New Activity:</h4>
        </div>
        <form >
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
            <div id="">
              <button type="submit" class="btn-sm btn-primary" v-on:click="submit()">Submit</button> 
              |
              <input type="reset" class="btn-sm btn-primary">
               <!-- <input type="reset"> -->
             <!--  </button>  -->
            </div>
        </form>
      </div>
    </div>
    <br>
    <br>
  
      <div id="activities_feed">
        <div>
          <div id="font_feed" v-for="job_activity in job.job_activities">
            <ul>
              <li>Activity: {{ job_activity.activities.name}} </li>
              <li>  Duration: {{ job_activity.duration }}  </li> Minutes <br>
              <li>Start Time: {{ job_activity.friendly_start_time }} </li>
              <h5>{{    }}</h5>
             <!--  <li> Job Id:{{ job_activity.activities.activity_id}} </li><br> -->
            <!--   <li>{{ job_activity.id }}</li> -->
              <br>
            </ul>
          </div>
        </div>
      </div>
      <div id="removeButton">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
           Remove Job
        </button>
      </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Caution</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" id="modalMessage">
           **If you click delete all job details will be removed**
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
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
   

    
    #activities_feed {
                            background: rgb(132, 190, 214);
                            background: -moz-linear-gradient(30deg, rgb(132, 190, 214) 20%, rgb(100, 150, 180) 59%);
                            background: -webkit-linear-gradient(30deg, rgb(132, 190, 214) 20%, rgb(100, 150, 180) 59%);
                            background: -o-linear-gradient(30deg, rgb(132, 190, 214) 20%, rgb(100, 150, 180) 59%);
                            background: -ms-linear-gradient(30deg, rgb(132, 190, 214) 20%, rgb(100, 150, 180) 59%);
                            background: linear-gradient(120deg, rgb(132, 190, 214) 20%, rgb(100, 150, 180) 59%);
                            width: 600px;
                            height: 700px;
                            overflow: scroll;
                            align-content: center;
                            margin-left: auto;
                            margin-right: auto;
                            padding-top: 50px;
                            padding-left: 40px;
                            border-style: ridge;
                            border-width: 10px;
                            border-color: rgb(234, 112, 102);
                       

                        }
                        #font_feed {
                                      color: rgb(234, 112, 102);
                                      font-size: 20px;
                                      align-content: center;
                                      font-style: bold;



                        }
                        #entry {
                                          height: 500px;
                                          width: 320px;
                                          margin-top: 125px;
                                          margin-left: 15px;
                                          padding-top: 20px;
                                          padding-bottom: 200px;
                                          padding-left: 20px;
                                          padding-right: 10px;
                                          font-style: serif;
                                          border: groove;
                                          border-width: 10px;
                                          border-color: rgb(234, 112, 102);
                                        /*  background-color: rgb(234, 112, 102);*/
                                        background: rgb(234, 112, 102);
                                        background: -moz-linear-gradient(30deg, rgb(234, 112, 102) 30%, rgb(239, 194, 74) 70%);
                                        background: -webkit-linear-gradient(30deg, rgb(234, 112, 102) 30%, rgb(239, 194, 74) 70%);
                                        background: -o-linear-gradient(30deg, rgb(234, 112, 102) 30%, rgb(239, 194, 74) 70%);
                                        background: -ms-linear-gradient(30deg, rgb(234, 112, 102) 30%, rgb(239, 194, 74) 70%);
                                        background: linear-gradient(120deg, rgb(234, 112, 102) 30%, rgb(239, 194, 74) 70%);


                          
                                     

  

                        }
                        #image_1 {
                                    margin-left: 100px;
                                    padding-top: 100px;
                                   }
                        #JobsShow {
                                    column-count: 3;
                                    padding-top: 100px;
                                    padding-bottom: 200px;
                                    background-color: rgb(46, 60, 67);

                        }
                        #removeButton {
                                      padding-left: 200px;
                                    
                        }
                        #activityAddName {
                                          font-size: 30px;
                                          font-style: bold;
                                          color: rgb(132, 190, 214);
                        }
                        #modalMessage {
                                      font-size: 20px;
                                      color: red;
                                      font-style: bold;
                        }
                        #exampleModalLabel {
                                            color: red;
                                            font-size: 30px;
                        }
    
</style>
 
<script>
  var axios = require('axios');

export default {
  data: function() {
    return {
            job: [], 
            activities: [],
            duration: "",
            activity_id: "",
            start_time: "",
            friendly_start_time: ""             
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