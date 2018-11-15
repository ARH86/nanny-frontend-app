<template>
  <div class="ChildShow">
    <div class="container">
      <br>
        <h1 id="childInfoTitle">Child Info</h1>
      <div v-model="child">
        <div class="column" id="child_info">
          <ul>
            <li><b>Name:</b> {{ child.name }} </li><br><br>
            <li><b>Age:</b> {{ child.age }} </li><br><br>
            <li><b>Gender:</b> {{ child.gender }} </li><br><br>
            <li><b>Child id:</b> {{ child.id }} </li><br>
          </ul>
        </div>
      </div>
    </div>
     <div class="form-group">
        <!-- Button trigger modal -->
      <div id="childDelete">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Delete Profile
        </button>
      </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Remove Profile</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Are you sure you want to delete the child?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" style="color:black" data-dismiss="modal">Close</button>
                <button type="submit" v-on:click="submit()" data-dismiss="modal" class="btn btn-primary">Delete Child</button>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  </div>
</template>

<style>
  #child_info {
              margin-left: 400px;
              margin-right: 400px;
              border: double;
              border-width: 20px;
              background: rgb(132, 190, 214);
              content: center;
              width: 400px;
              height: 300px;
              font-size: 40px;
              font-family: "Times New Roman", Times, serif;
              padding-left: 80px;
              padding-top: 70px;
              color: black;
              border-color: rgb(165, 151, 230);
              /*text-shadow: 5px 5px 0px rgba(0, 0, 0, 0.55);*/

            }

            div.ChildShow {
                            background: rgb(46, 60, 67);
                            height: 700px;
                            padding-top: 100px;


            }
            #button_delete {
                            padding-left: 300px;
            }
            #childInfoTitle {
                            font-size: 60px;
                            text-shadow: 5px 5px 0px rgba(0, 0, 0, 0.55);
                            color: rgb(234, 112, 102);
                            padding-bottom: 20px;

            }
            #childDelete {
                          padding-left: 1100px;
                          padding-top: 20px;
            }

</style>

<script>
  var axios = require('axios');

export default {
  data: function() {
    return {
            child: {
              name: "",
              age: "",
              gender: "",
              child_id: ""
            },
            errors: [],
    };
  },
  created: function() {
    axios 
    .get("http://localhost:3000/api/children/" + this.$route.params.id)
    .then(response => {
      this.child = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        child_id: this.child_id
      };
      axios
      .delete("http://localhost:3000/api/children/" + this.$route.params.id)
      .then(response => {
        this.$router.push("/children")
      })
      .catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  },
  computed: {}
};
</script>