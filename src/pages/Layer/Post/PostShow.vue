<template>
    <div class="container">
                <div class="row">
                    <div class="col-12">
                        <TopNews :post="post"></TopNews>
                    </div> 
                        </div>
                        
                    </div>
                   
</template>
<script>
    import TopNews from "./TopNews.vue";
    import axios from "axios";
    import { ref } from "vue";
    import { useRoute } from "vue-router";
    export default{
       components:{
           TopNews
       },
        setup(){
           const post = ref({});
           const loading = ref(true);
           const route = useRoute();
           function getPost(){
               axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
                .then(function (response) {
                    post.value = response.data;
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
                post,
                loading,
                route
             }
        },
    }
</script>