<template>
    <div v-if="currentActor">
        <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="name" required name="firstName" v-model="currentActor.firstName">

                <label for="lastname" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastname" required name="lastname" v-model="currentActor.lastName">

                <label for="movieList" class="form-label">movieList</label>
                <!-- <input type="text" class="form-control" name="movieList" v-model="movie.name"> -->
                <select name="movieList" id="moviList">
                     <option v-for="(movie,i) in currentActor.movieList" :key="i" :value="movie.id">{{movie.name}}</option> 
                     </select>
            </div>
           
            <div class="mb-3">
                <button @click="updateActor" class="btn btn-primary me-3">Save</button>
                <button @click="deleteActor" class="btn btn-danger">Delete</button>
            </div>
             <div class="alert alert-success" role="alert" v-if="message">
                {{message}}
            </div>
    </div>
</template>

<script>
import MovieService from '../../services/MovieService'
export default {
    name: 'edit-actor',
    data() {
        return {
            currentActor: null,
            message: ''
        }
    },
    methods: {
        getActor(id) {
            MovieService.getActor(id)
                .then(response => {
                    this.currentActor = response.data
                })
                .catch(e => {
                    alert(e)
                })
        }, 
        updateActor() {
            MovieService.update(this.currentActor.id, this.currentActor)
                .then(() => {
                    this.message = 'The actor was updated!'
                })
                .catch(e => {
                    alert(e)
                })
        },
        deleteActor() {
            MovieService.deleteActor(this.currentActor.id)
                .then(() => {
                    this.$router.push({name: 'actor'})
                })
                .catch(e => {
                    alert(e)
                })
        }
    },
    mounted() {
        this.getActor(this.$route.params.id)
    }
}
</script>