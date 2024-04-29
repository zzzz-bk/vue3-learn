import HomePage from "@/components/home/HomePage.vue";
import LoginPage from "@/components/login/LoginPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Store from "./Storage";

const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path:'/login',
            component:LoginPage,
            name:'login'
        },
        {
            path:'/home',
            component:HomePage,
            name:'home'
        }
    ]
})

Router.beforeEach((from)=>{
    let isLogin = Store.getters.isLogin;
    if(isLogin || from.name == 'login'){
        return true
    }else {
        return {name:'login'}
    }
})

export default Router;