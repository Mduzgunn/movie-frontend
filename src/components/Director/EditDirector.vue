<template>
    <div v-if="currentDirector">
        <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" required name="name" v-model="currentDirector.name">
                <label for="lastname" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastname" required name="lastname" v-model="currentDirector.lastName">
            </div>
           
            <div class="mb-3">
                <button @click="updateDirector" class="btn btn-primary me-3">Save</button>
                <button @click="deleteDirector" class="btn btn-danger">Delete</button>
            </div>
             <div class="alert alert-success" role="alert" v-if="message">
                {{message}}
            </div>
    </div>
</template>

<script>
import MovieService from '../../services/MovieService'
export default {
    name: 'edit-director',
    data() {
        return {
            currentDirector: null,
            message: ''
        }
    },
    methods: {
        getDirector(id) {
            MovieService.getDirector(id)
                .then(response => {
                    this.currentDirector = response.data
                })
                .catch(e => {
                    alert(e)
                })
        }, 
        updateDirector() {
            MovieService.update(this.currentDirector.id, this.currentDirector)
                .then(() => {
                    this.message = 'The diector was updated!'
                })
                .catch(e => {
                    alert(e)
                })
        },
        deleteDirector() {
            MovieService.deleteDirector(this.currentDirector.id)
                .then(() => {
                    this.$router.push({name: 'director'})
                })
                .catch(e => {
                    alert(e)
                })
        }
    },
    mounted() {
        this.getDirector(this.$route.params.id)
    }
}
</script>