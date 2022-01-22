import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/publisher',
            alias: '/publishers',
            name: 'publisher',
            component: () =>
                import ('./components/Publisher/Publisher')
        },
        {
            path: '/publishers/:id',
            name: 'edit-publisher',
            component: () =>
                import ('./components/Publisher/EditPublisher')
        },
        {
            path: '/addPublisher',
            name: 'add-publisher',
            component: () =>
                import ('./components/Publisher/AddPublisher')
        },


        //director------------------
        {
            path: '/director',
            alias: '/directors',
            name: 'director',
            component: () =>
                import ('./components/Director/Director')
        },
        {
            path: '/directors/:id',
            name: 'edit-director',
            component: () =>
                import ('./components/Director/EditDirector')
        },
        {
            path: '/addDirector',
            name: 'add-director ',
            component: () =>
                import ('./components/Director/AddDirector')
        },


        //movie------------------
        {
            path: '/movie',
            alias: '/movies',
            name: 'movie',
            component: () =>
                import ('./components/Movie/Movie')
        },
        {
            path: '/movies/:id',
            name: 'edit-movie',
            component: () =>
                import ('./components/Movie/EditMovie')
        },
        {
            path: '/addMovie',
            name: 'add-movie ',
            component: () =>
                import ('./components/Movie/AddMovie')
        },

        //actor------------------
        {
            path: '/actor',
            alias: '/actors',
            name: 'actor',
            component: () =>
                import ('./components/Actor/Actor')
        },
        {
            path: '/actors/:id',
            name: 'edit-actor',
            component: () =>
                import ('./components/Actor/EditActor')
        },
        {
            path: '/addActor',
            name: 'add-actor ',
            component: () =>
                import ('./components/Actor/AddActor')
        }
    ]
})