<template>
    <div id="home">
        <section>
        <div class="header-section-home">
        <div class="container">
        <HeaderHomeSe></HeaderHomeSe>
    </div>
    </div>
    </section>
    <section>
        <div class="top-game-section">
        <div class="container">
            <TxtHeaderHome></TxtHeaderHome>
        </div>
        <div class="container">
            <TopGame></TopGame>
        </div>
    </div>
    </section>
    <section>
        <div class="asked-question-section">
            <div class="container">
                <TxtHeaderHome></TxtHeaderHome>
            </div>
            <div class="container">
                <div class="row">
                <div class="col-lg-4 col-md-6 col-12" v-for="comment in comments" :key="comment.id">
                    <CommentSec :comment="comment"></CommentSec>
                </div>
                 <!-- <router-link :to="{name:'CommentSec'}" class="btn btn-blue btn-center">More...</router-link> -->
                </div>
            </div>
        </div>
    </section>
    <section>
        <div v-if="loading">
        <div class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
    </div>
        <div class="top-news-section" v-else>
            <div class="container">
                <TxtHeaderHome></TxtHeaderHome>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12" v-for="post in posts" :key="post.id">
                <TopNews :post="post"></TopNews>
                </div>
                    <router-link :to="{name:'Posts'}" class="btn btn-blue btn-center">more..</router-link>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>
<script>
import HeaderHomeSe from "./layer/HeaderHomeSe";
import TxtHeaderHome from "./layer/TxtHeaderHome";
import TopGame from "./layer/TopGame";
// import CommentList from "./layer/comment/CommentList";
import TopNews from "./layer/Post/TopNews";
import axios from "axios";
import { ref } from "vue";
import CommentSec from "./layer/comment/CommentSec.vue";

    export default{
        components :{
    HeaderHomeSe,
    TxtHeaderHome,
    TopGame,
    // CommentList,
    TopNews,
    CommentSec
},
        setup(){
           const posts = ref([]);
           const loading = ref(true);
           const comments = ref([])

           function getPost(){
               axios.get('https://jsonplaceholder.typicode.com/posts?_page=&_limit=3')
                .then(function (response) {
                    posts.value = response.data;
                    loading.value = false
                    
                })
                .catch(function (error) {
                    
                    console.log(error);
                });
            }
            function getComment(){
                axios.get('https://jsonplaceholder.typicode.com/comments?_page=&_limit=3')
                .then(function (response) {
                    comments.value = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            getComment();
            getPost();
            return{ 
                posts,
                loading,
                comments
             }
        },
    }
</script>