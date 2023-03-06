<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import Select from './components/Select.vue';
import Car from './components/Car.vue'
import Simulation from './components/Simulation.vue'
import api from './services/api.js'
</script>

<template>
  <Header/>
  <div class="main">
    <h3>Simulação de Financiamento</h3>
    <Select @submit="(data) =>{$store.state.car = data}" />
    <div v-show="$store.state.simulation" class="sect">
      <Car :car="$store.state.car"/>
      <Simulation :car="$store.state.car"/>
    </div>
  </div>
  
</template>

<style scoped>
h3 {
  margin: 20px 0 20px 0;
  font-size: 1.5em;
  font-weight: 400;
  position: relative;  
}


@media (min-width: 700px) {
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
  .sect {
    display: flex;
    margin-top: 30px;
  }
}



</style>

<script>
import '../src/styles/globals.css';
export default {
  name: 'App',
  data() {
    return {
      
      car: 1
    }
  },

  created(){

    api.get('vehicle').then(response=>{
      const newCar = []
      response.data.map(function(value, key) {
        newCar.push(value);
      });
      this.$store.commit('storeCar', newCar)
      
    })

  },
  
  mounted(){


    },
    methods: {
      submit(){
          alert(car)
      }
    }
}
</script>
