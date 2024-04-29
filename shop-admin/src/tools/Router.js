import HomePage from "@/components/home/HomePage.vue";
import LoginPage from "@/components/login/LoginPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Store from "./Storage";
import OrderPage from "@/components/order/OrderPage.vue";

const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            component: LoginPage,
            name: 'login'
        },
        {
            path: '/home',
            component: HomePage,
            name: 'home',
            children: [
                {
                    path: 'order/:type',
                    component: OrderPage,
                    name: 'order'
                }
            ],
            redirect: '/home/order/0'
        }
    ]
})

Router.beforeEach((from) => {
    let isLogin = Store.getters.isLogin;
    if (isLogin || from.name == 'login') {
        return true
    } else {
        return { name: 'login' }
    }
})

export default Router;