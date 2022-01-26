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

        <div class="select">
            <label for="actorList" class="form-label">actor</label>
            <select name="actorList" class="form-select" id="actorList" @change="onChangeActor($event)">
                <option v-for="actor in actors" :key="actor.id" :value="actor.id">{{actor.firstName}}</option>
            </select>
        </div>

        <div class="select">
            <label for="director" class="form-label">director</label>
            <select name="director" class="form-select" id="director" @change="onChangeDirector($event)">
                <option v-for="director in directors" :key="director.id" :value="director.id">{{director.name}}</option>
            </select>
        </div>

        <div class="select">
            <label for="publisher" class="form-label">publisher</label>
            <select name="publisher" class="form-select" id="publisher" @change="onChangePublisher($event)">
                <option v-for="publisher in publishers" :key="publisher.id" :value="publisher.id">{{publisher.name}}</option>
            </select>
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
            actors: [],
            directors: "",
            publishers: "",
            a: [],
            d:"",
            p:"",
            submitted: false,
            movie: {
                id: null,
                name: "",
                releaseYear: "",
                description: "",
                duration: "",
                media: "",
                active: "",
                genre: [],
                actorIds: [],
                director: "",
                publisherId: ""
            }

        }
    },
    methods: {
        getAllActor() {
            MovieService.getAllActor()
                .then(response => {
                    this.actors = response.data
                })
        },
        getAllDirector() {
            MovieService.getAllDirector()
                .then(response => {
                    this.directors = response.data
                })
        },
        getAll() {
            MovieService.getAll()
                .then(response => {
                    this.publishers = response.data
                })
        },
        onChangeActor(e) {
            this.a.push(e.target.value)
            this.movie.actorIds = this.a
        },
        onChangeDirector(e) {
            this.movie.director = e.target.value
        },
        onChangePublisher(e) {
            this.movie.publisherId = e.target.value
        },

        saveMovie() {
            var data = {
                name: this.movie.name,
                releaseYear: this.movie.releaseYear,
                description: this.movie.description,
                duration: this.movie.duration,
                media: this.movie.media,
                active: this.movie.active,
                genre: this.movie.genre,
                actorIds: this.movie.actorIds,
                director: this.movie.director,
                publisherId: this.movie.publisherId
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
    },
    mounted() {
        this.getAllActor(),
            this.getAllDirector(),
            this.getAll()
    }

}
</script>
