<template>
  <div class="container">
        <div class="row">
            <div class="col-12">
            
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
    }
}
</script>

<style>

</style>