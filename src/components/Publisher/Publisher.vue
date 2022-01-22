<template>
<div class="container">

    <h1 class="text-center"> Publisher List</h1>
    <a href="/addPublisher" style = "display: flex; justify-content:flex-end">
        <v-icon color="blue" x-large> mdi-plus-box</v-icon>
    </a>

    <table class="table table-striped table-hover">
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
                <td>
                    <a :href="'/publishers/' + publisher.id">
                        <v-icon color="blue" medium> mdi-square-edit-outline
                        </v-icon>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import MovieService from '../../services/MovieService'
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
