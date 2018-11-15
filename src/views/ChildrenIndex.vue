<template>
  <div class="ChildrenIndex">
      <br>
      <div class="col-md-1"></div>
    <div class="col-md-4">
    <ul>
        <div class="children_name_list">
          <div v-for="child in children" v-bind:value="child.id">
            <router-link v-bind:to="'/children/' + child.id"> 

             <li>  {{ child.name }} </li> 
             <span style="color:black">~~~~~~~</span>

            </router-link>
          </div>
        </div>
    </ul>
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-5" id="addChild">
      <div class="card">
        <form>
          <h1 id="addChildTitle">Register Child</h1>
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
    <div class="col-md-1"></div>

  </div>
</template>

<style>

    div.ChildrenIndex{
                    padding-top: 100px;
                    /*margin-bottom: 100px;*/
                    padding-bottom:475px;
                    background: rgb(46, 60, 67);

    }
    div.children_name_list {
                            background-color: rgb(132, 190, 214);
                            margin-left: 20px;
                            margin-right: 20px;
                            padding-left: 70px;
                            padding-right: 50px;
                            padding-top: 20px;
                            padding-bottom: 60px;
                            width: 300px;
                            height: 300px;
                            overflow: scroll;
                            border: double;
                            border-width: 10px;
                            font-size: 40px;
                            font-weight: bold;
                            font-family: "Times New Roman", Times, serif;
                            text-transform: capitalize;
                            letter-spacing: 5px;
                            line-height: 50px;
                            word-spacing: 5px;

                            
                            }
      #addChildTitle {
                      font-size: 50px;
                      text-shadow: 5px 4px 0px rgba(0, 0, 0, 0.55);
                      color: rgb(234, 112, 102);

                    }
      #addChild {
                color: rgb(234, 112, 102);
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
          this.$router.push("/children/" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });

    }

  },
  computed: {}
};
</script>