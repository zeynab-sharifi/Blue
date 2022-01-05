<template>
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
        <div class="top-news-section">
            <div class="container">
                <TxtHeaderHome></TxtHeaderHome>
            </div>
            <div class="container">
                <TopNews></TopNews>
            </div>
        </div>
    </section>
</template>
<script>
import HeaderHomeSe from "./layer/HeaderHomeSe";
import TxtHeaderHome from "./layer/TxtHeaderHome";
import TopGame from "./layer/TopGame";
import AskedQuSec from "./layer/AskedQuSec";
import TopNews from "./layer/TopNews.vue";
// import axios from "axios"
    export default{
        components :{
            HeaderHomeSe,
            TxtHeaderHome,
            TopGame,
            AskedQuSec,
            TopNews
        },
        // setup(){
        //     function getpost(){
        //         axios
        //         axios.get('https://jsonplaceholder.typicode.com/posts')
        //         .then(function (response) {
        //             // handle success
        //             console.log(response);
        //         })
        //         .catch(function (error) {
        //             // handle error
        //             console.log(error);
        //         })
        //         .then(function () {
        //             // always executed
        //         });
        //     }
        //     getpost(),
        // }
    }
</script>