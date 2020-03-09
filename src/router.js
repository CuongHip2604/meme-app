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
    { path: '/', name: 'Homme', component: Home },
    { path: '/change-password', name: 'ChangePassword', component: ChangePassword },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/post-detail', name: 'PostDetail', component: PostDetail },
    { path: '/upload', name: 'PostUpload', component: PostUpload },
    { path: '/user-page', name: 'UserPage', component: UserPage },
    { path: '/user-profile', name: 'UserProfile', component: UserProfile },
]

const router = new VueRouter({
    routes
})

export default router;
