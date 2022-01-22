<template>
    <div>
        <div v-if="!submitted">
            <div class="mb-3">
                <label for="name" class="form-label"> Name</label>
                <input type="text" class="form-control" id="name" required name="name" v-model="publisher.name">
            </div>
           
            <div class="mb-3">
                <button @click="savePublisher" class="btn btn-primary">Submit</button>
            </div>
        </div>
        <div v-else>
            <div class="alert alert-success" role="alert">
                Save Publisher successfully!
            </div>
            <button @click="newPublisher" class="btn btn-primary">Add New Publisher</button>
            <button class="btn btn-primary"><a href="/publishers">publisher list</a></button>
            

        </div>  
    </div>
</template>

<script>
import MovieService from '../../services/MovieService'

export default {
    name: 'add-publisher',
    data() {
        return {
            publisher: {
                id: null,
                name: ""
            },
            submitted: false
        }
    },
    methods: {
        savePublisher() {
            var data = {
                name: this.publisher.name
            }
            MovieService.create(data)
                .then(response => {
                    this.publisher.id = response.data.id
                    this.submitted = true;
                })
                .catch( e => {
                    alert(e)
                })
        },
        newPublisher() {
            this.submitted = false
            this.publisher = {}
        }
    }
}
</script>