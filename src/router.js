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

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/change-password', name: 'change-password', component: ChangePassword },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/post-detail/:id', name: 'post-detail', component: PostDetail },
    { path: '/upload', name: 'post-upload', component: PostUpload },
    { path: '/user/:id', name: 'user-page', component: UserPage },
    { path: '/user/:id/profile', name: 'user-profile', component: UserProfile },
]

const router = new VueRouter({
    routes
})

export default router;
