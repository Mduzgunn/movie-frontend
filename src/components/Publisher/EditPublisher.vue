<template>
<div v-if="currentPublisher">
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" required name="name" v-model="currentPublisher.name">
    </div>

    <div class="mb-3">
        <button @click="updatePublisher" class="btn btn-primary me-3">Save</button>
        <button @click="deletePublisher" class="btn btn-danger">Delete</button>
    </div>
    <div class="alert alert-success" role="alert" v-if="message">
        {{message}}
    </div>
</div>
</template>

<script>
import MovieService from '../../services/MovieService'
export default {
    name: 'edit-publisher',
    data() {
        return {
            currentPublisher: null,
            message: ''
        }
    },
    methods: {
        getPublisher(id) {
            MovieService.get(id)
                .then(response => {
                    this.currentPublisher = response.data
                })
                .catch(e => {
                    alert(e)
                })
        },
        updatePublisher() {
            MovieService.update(this.currentPublisher.id, this.currentPublisher)
                .then(() => {
                    this.message = 'The publisher was updated!'
                })
                .catch(e => {
                    alert(e)
                })
        },
        deletePublisher() {
            MovieService.delete(this.currentPublisher.id)
                .then(() => {
                    this.$router.push({
                        name: 'publisher'
                    })
                })
                .catch(e => {
                    alert(e)
                })
        }
    },
    mounted() {
        this.getPublisher(this.$route.params.id)
    }
}
</script>
