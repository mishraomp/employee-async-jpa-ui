import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';

Vue.config.productionTip = false;

new Vue({
    Vuetify,
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
