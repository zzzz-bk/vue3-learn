import HomePage from "@/components/home/HomePage.vue";
import LoginPage from "@/components/login/LoginPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Store from "./Storage";
import OrderPage from "@/components/order/OrderPage.vue";
import GoodList from "@/components/goods/GoodList.vue";
import AddGood from "@/components/goods/AddGood.vue";

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
                },
                {
                    path:'goods/:type',
                    component:GoodList,
                    name:'Goods'
                },
                {
                    path:'addGood/:type',
                    component:AddGood,
                    name:'AddGood'
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