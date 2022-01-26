<template>
<div class="container">
    <h1 class="text-center"> Movie List</h1>
    <a href="/addMovie" style="display: flex; justify-content:flex-end">
        <v-icon color="blue" x-large> mdi-plus-box</v-icon>
    </a>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Movie Id</th>
                <th>Movie Name</th>
                <th>releaseYear</th>
                <th>description</th>
                <th>duration</th>
                <th>media</th>
                <th>isActive</th>
                <th>genre</th>
                <th>actors</th>
                <th>director</th>
                <th>publisher</th>
                <th>reviews</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="movie in movies" v-bind:key="movie.id">
                <td>{{movie.id }}</td>
                <td>{{movie.name }}</td>
                <td>{{movie.releaseYear}}</td>
                <td>{{movie.description}}</td>
                <td>{{movie.duration}}</td>
                <td>{{movie.media}}</td>
                <td>{{movie.isActive}}</td>
                <td>
                    <ul>
                        <li v-for="(genre,i) in movie.genre" :key="i">{{genre}}</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li v-for="(actor,i) in movie.actors" :key="i">{{actor.firstName}}</li>
                    </ul>
                </td>

                <td>{{movie.director}}</td>
                <td>{{movie.publisherName}}</td>
                <td>{{movie.reviews}}</td>
                <td><a :href="'/movies/' + movie.id">
                        <v-icon color="blue" medium> mdi-square-edit-outline
                        </v-icon>
                    </a></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import MovieService from '../../services/MovieService'
export default {
    name: 'movies',
    data() {
        return {
            movies: []
        }
    },
    methods: {
        retrieveMovies() {
            MovieService.getAllMovie()
                .then(response => {
                    this.movies = response.data
                })
        }
    },
    mounted() {
        this.retrieveMovies()
    }
}
</script>
