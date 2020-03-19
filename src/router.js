import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './pages/Home'
import ChangePassword from './pages/ChangePassword'
import Login from './pages/Login'
import Register from './pages/Register'
import PostDetail from './pages/PostDetail'
import PostUpload from './pages/PostUpload'
import UserPage from './pages/UserPage'
import UserProfile from './pages/UserProfile'
import Search from './pages/Search'

import {IfAuthenticated, IfNotAuthenticated} from './dist/authenticate'
const routes = [
    {
        path: '/', 
        name: 'home', 
        component: Home,
        
    },
    { 
        path: '/user/:id/password',
        name: 'change-password', 
        component: ChangePassword,
        beforeEnter : IfAuthenticated

    },
    { 
        path: '/login', 
        name: 'login', 
        component: Login,
        beforeEnter : IfNotAuthenticated
    },
    { 
        path: '/register', 
        name: 'register', 
        component: Register,
        beforeEnter : IfNotAuthenticated 
    },
    { 
        path: '/post-detail/:id', 
        name: 'post-detail', 
        component: PostDetail
    },
    { 
        path: '/upload', 
        name: 'post-upload', 
        component: PostUpload,
        beforeEnter : IfAuthenticated

    },
    { 
        path: '/user/:id', 
        name: 'user-page', 
        component: UserPage,
        beforeEnter : IfAuthenticated

    },
    { 
        path: '/user/:id/profile',
        name: 'user-profile', 
        component: UserProfile,
        beforeEnter : IfAuthenticated

    },
    {
        path: '/search',
        name: 'search',
        component: Search
    }
]

const router = new VueRouter({
    routes
})

export default router;
