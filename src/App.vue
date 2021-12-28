<template>
  <header-blue></header-blue>
  <router-view></router-view>
</template>

<script>
import HeaderBlue from "./components/HeaderBlue.vue"
export default {
  name: 'App',
  components:{
    HeaderBlue
  }
}
</script>

<style>

</style>
