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
                <AskedQuSec></AskedQuSec>
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
                    <a href="" class="btn btn-blue btn-center">more..</a>
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
import AskedQuSec from "./layer/AskedQuSec";
import TopNews from "./layer/Post/TopNews";
import axios from "axios";
import { ref } from "vue";

    export default{
        components :{
            HeaderHomeSe,
            TxtHeaderHome,
            TopGame,
            AskedQuSec,
            TopNews
        },
        setup(){
           const posts = ref([]);
           const loading = ref(true);

           function getPost(){
               axios.get('https://jsonplaceholder.typicode.com/posts?_page=&_limit=3')
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
                
             }
        },
    }
</script>