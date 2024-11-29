import Vue from 'vue';
import Router from 'vue-router';
import About from './components/About.vue';
import MapPage from './components/MapPage.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/about', component: About },
        { path: '/map/:id?', component: MapPage },
        { path: '*', redirect: '/about' },
    ],
});
