import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Toast, { POSITION } from "vue-toastification";
import VueI18n from "vue-i18n";
import { createI18n } from "vue-i18n-composable";

import en from "./locales/en.json";
import ru from "./locales/ru.json";
import 'leaflet/dist/leaflet.css';
import "vue-toastification/dist/index.css";

Vue.use(VueI18n);
const i18n = createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en,
        ru,
    },
});

Vue.config.productionTip = false;

Vue.use(Toast, {
    position: POSITION.TOP_CENTER
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
    i18n,
}).$mount('#app');
