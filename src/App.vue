<template>
  <header-blue></header-blue>
  
  <router-view></router-view>
  <footer-blue></footer-blue>
</template>

<script>
import HeaderBlue from "./components/HeaderBlue.vue";
import FooterBlue from "./components/FooterBlue.vue"
export default {
  name: 'App',
  components:{
    HeaderBlue,
    FooterBlue
  }
}
</script>

<style>

</style>
