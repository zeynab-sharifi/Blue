<template>
    <div class="row">
            <div class="col-lg-6 col-md-12 col-12">
                <h1>{{ title }}</h1>
                <p>{{ message }}</p>
                <a class="btn btn-primery">Download</a>
                <div class="better-list-game">
                    <div class="col-lg-4 col-4">
                        <div class="better-game">
                            <img src="" alt="">
                            <p>{{ betterText}}</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-4">
                        <div class="better-game">
                            <img src="" alt="">
                            <p>{{ betterText}}</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-4">
                        <div class="better-game">
                            <img src="" alt="">
                            <p>{{ betterText}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12">
                <img src="" alt="">
            </div>
        </div>
</template>
<script>
    export default{
        data(){
            return{
                title :'Blue Game',
                message :'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, quae vitae harum nihil nobis dolores voluptatesb quibusdam labore sunt accusantium, expedita, veniam a qui rerum! Est illum repellat hic et.',
                betterText : 'Lorem ipsum dolor sit amet consectetur'
            }
        }
    }
</script>