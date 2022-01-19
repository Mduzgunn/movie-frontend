
<template>
    <div class = "container">
            <h1 class = "text-center"> Publisher List</h1>
            <table class = "table table-striped">
                <thead>
                    <tr>
                        <th> Publisher Id</th>
                        <th> Publisher Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="publisher in publishers" v-bind:key="publisher.id">
                        <td> {{publisher.id }}</td>
                        <td> {{publisher.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>
<script>
import MovieService from '../services/MovieService'
export default {
    name: 'publishers',
    data() {
        return {
            publishers: []
        }
    },
    methods: {
        retrievePublishers() {
            MovieService.getAll()
                .then(response => {
                    this.publishers = response.data
                })
        }
    },
    mounted() {
        this.retrievePublishers()
    }
}
</script>
