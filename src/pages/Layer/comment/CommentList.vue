<template>
    <div class="container">
        <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-12"></div>
        </div>
    </div>                                  
</template>
<script>

import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
    export default{
        setup(){
            const comments = ref([])
            const route = useRoute();

            function getComment(){
                axios.get('https://jsonplaceholder.typicode.com/comments')
                .then(function (response) {
                    comments.value = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            getComment();

            return{
                comments,
                route
            }
        }
    
}
</script>