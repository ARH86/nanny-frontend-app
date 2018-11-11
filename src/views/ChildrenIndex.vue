<template>
  <div class="ChildrenIndex">
    <ul>
      <br>
      <div class="card">
        <div class="children_name_list" style="height: 500px">
          <div v-for="child in children" v-bind:value="child.id">
            <router-link v-bind:to="'/children/' + child.id"> 
             <li>  {{ child.name }} </li> 
            </router-link>
          </div>
        </div>
      </div>
    </ul>
    <div class="container" id="addChild">
      <div class="card">
        <form>
          <h1>Add Child</h1>
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="name">
          </div>
          <div class="form-group">
            <label>Age:</label>
            <input type="text" class="form-control" v-model="age">
          </div>
          <form>
            <label>Gender:</label>
            <br>
            <input type="radio" id="male" v-model="gender" value="male">
            <label for="male">Male</label>
            <br>
            <input type="radio" id="female" v-model="gender" value="female">
            <label for="female">Female</label>
            <br>
            <br>
          </form>
          <input v-on:click="submit()" class="btn btn-primary" value="Add Child" >
          |
          <input type="reset" class="btn btn-primary" value="Clear">
          <br>
        </form>
      </div>
      <br>
    </div>
  </div>
</template>

<style>

    div.ChildrenIndex{
                    background: rgb(46, 60, 67);
    }
    div.children_name_list {
                            background-color: lightblue;
                            margin-left: 20px;
                            width: 200px;
                            height: 200px;
                            overflow: scroll;
                            border: double;
                            display: block;
                            }
    #addChild {
              padding-top: 150px;
              padding-bottom: 200px;

    }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
            name: "",
            age: "",
            gender: "",
            errors: [],
            children: []
      
    };
  },
  created: function() {
    
      axios
      .get("http://localhost:3000/api/children")
      .then(response => {
        this.children = response.data;
      });
    
  },
  methods: {
    submit: function() {
       var params = {
        name: this.name,
        age: this.age,
        gender: this.gender,
    };
      axios
        .post("http://localhost:3000/api/children", params)
        .then(response => {
          this.$router.push("/Child" + child.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });


    }

  },
  computed: {}
};
</script>