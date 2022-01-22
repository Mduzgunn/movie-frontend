<template>
    <div>
        <div v-if="!submitted">
            <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" required name="firstName" v-model="actor.firstName">
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" required name="lastName" v-model="actor.lastName">
            </div>
            
            <div class="mb-3">
                <button @click="saveActor" class="btn btn-primary">Submit</button>
            </div>
        </div>
        <div v-else>
            <div class="alert alert-success" role="alert">
                Save actor successfully!
            </div>
            <button @click="newActor" class="btn btn-primary">Add New Actor</button>
        </div>
    </div>
</template>

<script>
import MovieService from '../../services/MovieService'
export default {
    name: 'add-actor',
    data() {
        return {
            actor: {
                id: null,
                firstName: "",
                lastName: ""
            },
            submitted: false
        }
    },
    methods: {
        saveActor() {
            var data = {
                firstName: this.actor.firstName,
                lastName: this.actor.lastName
            }
            MovieService.createActor(data)
                .then(response => {
                    this.actor.id = response.data.id
                    this.submitted = true;
                })
                .catch( e => {
                    alert(e)
                })
        },
        newActor() {
            this.submitted = false
            this.actor = {}
        }
    }
}
</script>