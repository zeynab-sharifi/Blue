<template>
      <div class="box-top-news">
            <img src="" alt="">
            <div class="box-top">
                <router-link :to="{ name:'PostId', params:{id: post.id} }"><h3>{{post.title}}</h3></router-link>
                <p>{{post.body}}</p>
            </div>
       </div>                
</template>
<script>  
    export default{
        props:{
            post:Object,
        }
    }
</script>