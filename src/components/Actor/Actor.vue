<template>
<div class="container">
    <h1 class="text-center"> actor List</h1>
    <a href="/addActor" style="display: flex; justify-content:flex-end">
        <v-icon color="blue" x-large> mdi-plus-box</v-icon>
    </a>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th> actor Id</th>
                <th> actor First Name</th>
                <th> actor Last Name</th>
                <th> actor movies</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="actor in actors" v-bind:key="actor.id">
                <td> {{actor.id }}</td>
                <td> {{actor.firstName }}</td>
                <td>{{actor.lastName}}</td>
                <td>
                    <ul>
                        <li v-for="(movie,i) in actor.movie" :key="i">{{movie.name}}</li>
                    </ul>
                </td>

                <td>
                    <a :href="'/actors/' + actor.id">
                        <v-icon color="blue" medium> mdi-square-edit-outline</v-icon>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import MovieService from '../../services/MovieService'
export default {
    name: 'actors',
    data() {
        return {
            actors: []
        }
    },
    methods: {
        retrieveActors() {
            MovieService.getAllActor()
                .then(response => {
                    this.actors = response.data
                })
        }
    },
    mounted() {
        this.retrieveActors()
    }
}
</script>
