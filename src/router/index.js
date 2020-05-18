import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home"
import Staff from "../components/Staff"
import Main from "../components/Main"
import Login from "../components/Login"


Vue.use(Router);


export default new Router({
linkActiveClass : true,
 mode: 'history',
base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/staff',
            name: 'Staff',
            component: Staff
        },

    ]
})