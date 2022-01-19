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

import MovieService from '../services/MovieService';

export default {
    name: 'Publishers',
    data(){
        return {
            publishers: []
        }
    },
    methods: {
        getPublishers(){
            MovieService.getPublishers().then((response) => {
                this.publishers = response.data;   
            });
        }
    },
    created() {
        this.getPublishers();
    }
}

</script>