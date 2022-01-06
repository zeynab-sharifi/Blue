<template>
    
                        <div class="box-top-news">
                            <img src="" alt="">
                            <div class="box-top">
                                <a href=""><h3>{{post.title}}</h3></a>
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