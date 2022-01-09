<template>
    <div class="post-show-page">
        <div class="container">
                <div class="row">
                    <div class="col-9">
                        <TopNews :post="post"></TopNews>
                    </div>
                    <div class="col-3">
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                                The current link item
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">A second link item</a>
                            <a href="#" class="list-group-item list-group-item-action">A third link item</a>
                            <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
                            <a class="list-group-item list-group-item-action disabled">A disabled link item</a>
                        </div>
                    </div> 
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