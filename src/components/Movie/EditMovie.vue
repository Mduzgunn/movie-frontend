<template>
<div v-if="currentMovie">
    <div class="mb-3">
        <label for="media" class="form-label">media</label>
        <input type="text" class="form-control" id="media" required name="media" v-model="currentMovie.media">
    </div>
    <div class="mb-3">
        <label for="isActive" class="form-label">isActive</label>
        <input type="checkbox" id="isActive" required name="isActive" v-model="currentMovie.isActive">
    </div>
    <div class="select">
        <label for="actorList" class="form-label">actor</label>
        <select name="actorList" class="form-select" id="actorList" @change="onChange($event)">
            <option v-for="actor in actors" :key="actor.id" :value="actor.id">{{actor.firstName}}</option>
        </select>
    </div>

    <div class="mb-3">
        <button @click="updateMovie" class="btn btn-primary me-3">Save</button>
        <button @click="deleteMovie" class="btn btn-danger">Delete</button>
    </div>
    <div class="alert alert-success" role="alert" v-if="message">
        {{message}}
    </div>
</div>
</template>

<script>
import MovieService from '../../services/MovieService'

export default {
    name: 'edit-movie',
    data() {
        return {
            currentMovie: null,
            movies: [],
            message: '',
            actors: [],
            bitane: []
        }
    },
    methods: {
        getAllActor() {
            MovieService.getAllActor()
                .then(response => {
                    this.actors = response.data
                })
        },
        onChange(e) {
            this.bitane.push(e.target.value)
            this.currentMovie.actorIds = this.bitane
            MovieService.updateMovie(this.currentMovie.id, this.currentMovie)
        },
        retrieveMovies() {
            MovieService.getAllMovie()
                .then(response => {
                    this.movies = response.data
                })
        },
        getMovie(id) {
            MovieService.getMovie(id)
                .then(response => {
                    this.currentMovie = response.data
                })
                .catch(e => {
                    alert(e)
                })
        },
        updateMovie() {
            MovieService.updateMovie(this.currentMovie.id, this.currentMovie)
                .then(() => {
                    this.message = 'The movie was updated!'
                })
                .catch(e => {
                    alert(e)
                })
        },
        deleteMovie() {
            MovieService.deleteMovie(this.currentMovie.id)
                .then(() => {
                    this.$router.push({
                        name: 'movie'
                    })
                })
                .catch(e => {
                    alert(e)
                })
        }
    },
    mounted() {
        this.getMovie(this.$route.params.id),
            this.retrieveMovies(),
            this.getAllActor()
    }

}
</script>
