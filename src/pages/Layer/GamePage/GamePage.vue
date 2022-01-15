<template>
  <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                <div class="photos-box">
                    <img src="" alt="">
                    <h2></h2>
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
                axios.get('https://jsonplaceholder.typicode.com/photos')
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