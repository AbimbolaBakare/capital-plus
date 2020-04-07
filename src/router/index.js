import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home"

Vue.use(Router);


export default new Router({
linkActiveClass : true,
 mode: 'history',
base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        

    ]
})