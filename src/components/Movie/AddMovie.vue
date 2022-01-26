<template>
<div>

    <div v-if="!submitted">
        <div class="mb-3">
            <label for="name" class="form-label">Movie Name</label>
            <input type="text" class="form-control" id="name" required name="name" v-model="movie.name">
        </div>
        <div class="mb-3">
            <label for="releaseYear" class="form-label">Release Year</label>
            <input type="text" class="form-control" id="lastName" required name="releaseYear" v-model="movie.releaseYear">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <input type="text" class="form-control" id="description" required name="description" v-model="movie.description">
        </div>
        <div class="mb-3">
            <label for="duration" class="form-label">Duration</label>
            <input type="text" class="form-control" id="duration" required name="duration" v-model="movie.duration">
        </div>
        <div class="mb-3">
            <label for="media" class="form-label">Media</label>
            <input type="text" class="form-control" id="media" required name="media" v-model="movie.media">
        </div>
        <div class="mb-3">
            <label for="active" class="form-label">Active</label>
            <input type="checkbox" id="active" required name="active" v-model="movie.active">
        </div>

        <div>
            <label for="genre" class="typo__label">Genre</label>
            <multiselect v-model="movie.genre" :options="genres" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" :preselect-first="true">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
            </multiselect>
            <pre class="language-json"><code>{{ movie.genre  }}</code></pre>
        </div>

        <div class="select">
            <label for="actorList" class="form-label">Actor</label>
            <select name="actorList" class="form-select" id="actorList" @change="onChangeActor($event)">
                <option v-for="actor in actors" :key="actor.id" :value="actor.id">{{actor.firstName}}</option>
            </select>
        </div>
        <div class="select">
            <label for="director" class="form-label">Director</label>
            <select name="director" class="form-select" id="director" @change="onChangeDirector($event)">
                <option v-for="director in directors" :key="director.id" :value="director.id">{{director.name}}</option>
            </select>
        </div>
        <div class="select">
            <label for="publisher" class="form-label">Publisher</label>
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
import Multiselect from 'vue-multiselect'

export default {
    name: 'add-movie',
    components: {
        Multiselect
    },
    data() {
        return {
            value: [],
            genres: [
                'DRAMA',
                'COMEDY',
                'HORROR'
            ],

            actors: [],
            directors: "",
            publishers: "",
            a: [],
            // g: [],
            d: "",
            p: "",
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
            },

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
        // onChangeGenre(e) {
        //     this.g.push(e.target.value)
        //     this.movie.genre = this.g
        // },
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
