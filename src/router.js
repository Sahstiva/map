import Vue from 'vue';
import Router from 'vue-router';
import About from './components/About.vue';
import Map from './components/Map.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/about', component: About },
        { path: '/map/:id?', component: Map },
        { path: '*', redirect: '/about' },
    ],
});
