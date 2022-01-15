<template>
    <div class="container">
        <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-12" v-for="Comment in Comments" :key="Comment.id">
               <div class="box-comment-list">
                    <h3>{{ Comment.name }}</h3>
                    <p>{{ Comment.body }}</p>
               </div>
           </div>
        </div>
    </div>                                  
</template>
<script>

import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
    export default{
        setup(){
            const Comments = ref([])
            const route = useRoute();

            function getComment(){
                axios.get('https://jsonplaceholder.typicode.com/comments')
                .then(function (response) {
                    Comments.value = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            getComment();

            return{
                Comments,
                route
            }
        }
    
}
</script>