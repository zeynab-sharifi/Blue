<template>
            <div class="top-Game">
                <img src={photos.url} alt="">
                <h3>{{ photos.title }}</h3>
            </div>
</template>
<script>
    export default{
        props: {
            photos:Object
        }
    }
</script>