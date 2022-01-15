<template>
  <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 col-12" v-for="Photo in Photos" :key="Photo.id">
                <div class="photos-box">
                    <img :src="Photo.url" alt="">
                    <h2>{{ Photo.title }}</h2>
                </div>
            </div> 
        </div>              
    </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
    setup(){
        const Photos = ref({});
        const route = useRoute();
        function getTopGame(){
                axios.get('https://jsonplaceholder.typicode.com/photos?_page=&_limit=10')
                .then(function (response) {
                    Photos.value = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            getTopGame();
            return{
                Photos,
                route
            }
    }
}
</script>

<style>

</style>