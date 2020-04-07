import VueRouter from "vue-router";

//Components
import home from '../components/home'
import healthTips from '../components/details/healthTips';


const routes = [{
    path: '/',
    name: 'home',
    component: home
},
{
    path: '/healthTips',
    name: 'healthTips',
    component: healthTips,
}];

const router = new VueRouter({
    routes
});

router.beforeResolve((to, _, next) => {
    if (routes.some((value) => value.name === to.name)) {
        next();
    }
    else {
        next('/');
    }
});

export default router;