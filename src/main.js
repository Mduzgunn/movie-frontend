import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import axios from 'axios'
import VueAxios from 'vue-axios'
import Multiselect from 'vue-multiselect'

// register globally
Vue.component('multiselect', Multiselect)


Vue.config.productionTip = false

new Vue({
    axios,
    VueAxios,
    vuetify,
    router,
    render: h => h(App),
}).$mount('#app')