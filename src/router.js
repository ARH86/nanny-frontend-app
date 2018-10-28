import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Activity from './views/Activity.vue';
import ActivitiesNew from "./views/JobActivitiesNew.vue";
import JobsShow from "./views/JobsShow.vue";

import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";


Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home},
    { path: '/activities', name: 'activities', component: Activity },
    { path: "/job_activities_new/", name: "job-activities-new", component: ActivitiesNew},
    { path: '/jobs/:id', name: 'jobs-show', component: JobsShow},
   

    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout }


    

    
  ]
});
