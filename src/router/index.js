import Vue from 'vue';
import VueRouter from 'vue-router';
import Employee from '../views/Employee';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'employee',
        component: Employee
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
