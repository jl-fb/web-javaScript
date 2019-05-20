import Vue from "vue";
import VueRouter from "vue-router";

//Cofigurar rotas entre componentes e pastas
import Home from "../components/home/Home";
import AdminPages from "@/components/admin/AdminPages"

Vue.use(VueRouter)

//criando rotas
const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
}]

// Instanciando o VueRouter com as rotas para passa para o main.js
export default new VueRouter({
    mode: 'history',
    routes
})
