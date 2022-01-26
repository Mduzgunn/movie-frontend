<template>
<v-app>

    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">Publisher Manager</router-link>
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link to="/publishers" class="nav-link">Publisher List</router-link>

                        <router-link to="/directors" class="nav-link">director List</router-link>

                        <router-link to="/movies" class="nav-link">movie List</router-link>

                        <router-link to="/actors" class="nav-link">actor List</router-link>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container">
            <router-view />
        </div>
    </div>
</v-app>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
        background-color: #121212;
}

body,option {
    background-color: #121212;
}

h1,h2,h3,h4,h5,h6,p,label {
    color: #bb86fc;
}
td{color: ghostwhite;}
tr{color:#03dac6;}
#isActive{
    accent-color: #03dac6;
}
a {
  text-decoration: none;
}

select{
color:#03dac6;
}
.form-select,.form-control{
    width: 50%;
    margin: auto;
    color:#03dac6;
    background-color:#383b3c ;

}

</style>
