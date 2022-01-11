<template>
    <div class="box-asked">
        <h3>{{ comment.name}}</h3>
        <p>{{ comment.body }}</p>
    </div>
    
</template>

<script>
export default {
    props: {
        comment:Object
    },
}
</script>

<style>

</style>