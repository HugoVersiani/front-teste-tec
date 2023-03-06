<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import Select from './components/Select.vue'
</script>

<template>
  <Header/>
  <div class="main">
    <h3>Simulação de Financiamento</h3>
    <Select/>
    <HelloWorld msg="Vite + Vue" />
  </div>
  
</template>

<style scoped>
h3 {
  margin: 70px 0 20px 0;
  font-size: 2em;
  position: relative;  
}

h3:after {
  display: block;
  content: '';
  width: 5%;
  height: 4px;
  background: var(--color-primary);
  position: absolute;
  bottom: 0;
  left: 0;
}



</style>

<script>
import '../src/styles/globals.css';
export default {
  name: 'App',
  created(){
    console.log(this.$store)
  }
}
</script>
