<template>
  <div class="ChildShow">
    <div class="container">
      <br>
      <div v-model="child">
        <ul>
          <li>Name: {{ child.name }} </li>
          <li>Age: {{ child.age }} </li>
          <li>Gender: {{ child.gender }} </li>
          <li>Child id: {{ child.id }} </li>
        </ul>
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