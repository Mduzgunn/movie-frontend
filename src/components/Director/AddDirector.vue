<template>
    <div>
        <div v-if="!submitted">
            <div class="mb-3">
                <label for="name" class="form-label">First Name</label>
                <input type="text" class="form-control" id="name" required name="name" v-model="director.name">
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" required name="lastName" v-model="director.lastName">
            </div>
            
            <div class="mb-3">
                <button @click="saveDirector" class="btn btn-primary">Submit</button>
            </div>
        </div>
        <div v-else>
            <div class="alert alert-success" role="alert">
                Save director successfully!
            </div>
            <button @click="newDirector" class="btn btn-primary">Add New Director</button>
        </div>
    </div>
</template>

<script>
import MovieService from '../../services/MovieService'
export default {
    name: 'add-director',
    data() {
        return {
            director: {
                id: null,
                name: "",
                lastName: ""
            },
            submitted: false
        }
    },
    methods: {
        saveDirector() {
            var data = {
                name: this.director.name,
                lastName: this.director.lastName
            }
            MovieService.createDirector(data)
                .then(response => {
                    this.director.id = response.data.id
                    this.submitted = true;
                })
                .catch( e => {
                    alert(e)
                })
        },
        newDirector() {
            this.submitted = false
            this.director = {}
        }
    }
}
</script>