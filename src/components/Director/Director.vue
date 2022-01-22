<template>
<div class="container">
    <h1 class="text-center"> Director List</h1>
    <a href="/addDirector" style="display: flex; justify-content:flex-end">
        <v-icon color="blue" x-large> mdi-plus-box</v-icon>
    </a>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th> Director Id</th>
                <th> Director Name</th>
                <th> Director Last Name</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="director in directors" v-bind:key="director.id">
                <td> {{director.id }}</td>
                <td> {{director.name }}</td>
                <td>{{director.lastName}}</td>
                <td><a :href="'/directors/' + director.id">
                        <v-icon color="blue" medium> mdi-square-edit-outline
                        </v-icon>
                    </a></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import MovieService from '../../services/MovieService'
export default {
    name: 'directors',
    data() {
        return {
            directors: []
        }
    },
    methods: {
        retrieveDirectors() {
            MovieService.getAllDirector()
                .then(response => {
                    this.directors = response.data
                })
        }
    },
    mounted() {
        this.retrieveDirectors()
    }
}
</script>
