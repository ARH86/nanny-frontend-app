import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from "./views/Signup.vue";
import Activity from './views/Activity.vue';
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import ActivitiesNew from "./views/ActivitiesNew.vue";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home},
    { path: '/activity', name: 'activity', component: Activity },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/job_activities/new", name: "job-activities-new", component: ActivitiesNew}

    

    
  ]
});
