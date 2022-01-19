import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            alias: '/publishers',
            name: 'publisher',
            component: () =>
                import ('./components/Publisher')
        },
        {
            path: '/add',
            name: 'add-publisher',
            component: () =>
                import ('./components/AddPublisher')
        }
    ]
})