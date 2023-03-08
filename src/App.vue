<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <Header/>
    <RouterView />
  <Footer/>
</template>

<style scoped>


</style>

<script>
import '../src/styles/globals.css';
export default {
  name: 'App',
 
}
</script>
