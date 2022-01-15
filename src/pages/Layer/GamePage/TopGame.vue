<template>
            <div class="top-Game">
                <img :src="photo.url" alt="">
                <h3>{{ photo.title }}</h3>
            </div>
</template>
<script>
    export default{
        props: {
            photo:Object
        }
    }
</script>