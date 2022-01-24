<template>
<div>
    <div v-if="!submitted">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" required name="name" v-model="movie.name">
        </div>
        <div class="mb-3">
            <label for="releaseYear" class="form-label">releaseYear</label>
            <input type="text" class="form-control" id="lastName" required name="releaseYear" v-model="movie.releaseYear">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">description</label>
            <input type="text" class="form-control" id="description" required name="description" v-model="movie.description">
        </div>
        <div class="mb-3">
            <label for="duration" class="form-label">duration</label>
            <input type="text" class="form-control" id="duration" required name="duration" v-model="movie.duration">
        </div>
        <div class="mb-3">
            <label for="media" class="form-label">media</label>
            <input type="text" class="form-control" id="media" required name="media" v-model="movie.media">
        </div>
        <div class="mb-3">
            <label for="active" class="form-label">active</label>
            <input type="checkbox" id="active" required name="active" v-model="movie.active">
        </div>
        <div class="mb-3">
            <label for="genre" class="form-label">genre</label>
            <input type="text" class="form-control" id="genre" name="genre" v-model="movie.genre">
        </div>

        <div class="mb-3">
            <label for="actors" class="form-label">actors</label>
            <input type="text" class="form-control" id="actors" name="actors" v-model="movie.actors">
        </div>

        <div class="mb-3">
            <label for="director" class="form-label">director</label>
            <input type="text" class="form-control" id="director" required name="director" v-model="movie.director">
        </div>


        <div class="mb-3">
            <label for="publisherId" class="form-label">publisherId</label>
            <input type="text" class="form-control" id="director" name="publisherId" v-model="movie.publisherId">
        </div>

        <div class="mb-3">
            <button @click="saveMovie" class="btn btn-primary">Submit</button>
        </div>
    </div>
    <div v-else>
        <div class="alert alert-success" role="alert">
            Save Movie successfully!
        </div>
        <button @click="newMovie" class="btn btn-primary">Add New Movie</button>
    </div>
</div>
</template>

<script>
import MovieService from '../../services/MovieService'
export default {
    name: 'add-movie',
    data() {
        return {
            movie: {
                id: null,
                name: "",
                releaseYear: "",
                description: "",
                duration: "",
                media: "",
                active: "",
                genre: [],
                actors: [],
                director: "",
                publisherId: ""
            },
            submitted: false
        }
    },
    methods: {
        saveMovie() {
            var data = {
                name: this.movie.name,
                releaseYear: this.movie.releaseYear,
                description: this.movie.description,
                duration: this.movie.duration,
                media: this.movie.media,
                active: this.movie.active,
                genre: this.movie.genre,
                actors: this.movie.actors,
                director: this.movie.director,
                publisherId:this.movie.publisherId
            }
            MovieService.createMovie(data)
                .then(response => {
                    this.movie.id = response.data.id
                    this.submitted = true;
                })
                .catch(e => {
                    alert(e)
                })
        },
        newMovie() {
            this.submitted = false
            this.movie = {}
        }
    }
}
</script>
