<template>
  <div class="ChildShow">
    <div class="container">
      <br>
      <div v-model="child">
        <div class="column" id="child_info">
          <ul>
            <li>Name: {{ child.name }} </li><br><br>
            <li>Age: {{ child.age }} </li><br><br>
            <li>Gender: {{ child.gender }} </li><br><br>
            <li>Child id: {{ child.id }} </li><br>
          </ul>
        </div>
      </div>
    </div>
     <div class="form-group">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Delete Profile
        </button>

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
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" v-on:click="submit()" class="btn btn-primary">Delete Child</button>
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

            }

            div.ChildShow {
                            background: rgb(46, 60, 67);
                            height: 700px;
                            padding-top: 100px;


            }
            #button_delete {
                            padding-left: 300px;
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