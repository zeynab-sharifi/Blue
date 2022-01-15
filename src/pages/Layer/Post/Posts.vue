<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12 col-12" v-for="post in posts" :key="post.id">
                <div class="post-box">
                    <router-link :to="{ name:'PostId', params:{id: post.id} }"><h3>{{post.title}}</h3></router-link>
                    <p>{{post.body}}</p>
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
           const posts = ref({});
           const loading = ref(true);
           const route = useRoute();
           function getPost(){
               axios.get(`https://jsonplaceholder.typicode.com/posts`)
                .then(function (response) {
                    posts.value = response.data;
                    loading.value = false
                    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
            }
            getPost();
            return{ 
                posts,
                loading,
                route
             }
        },
    }
</script>

<style>
   
</style>