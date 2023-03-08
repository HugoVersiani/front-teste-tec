<script setup>
import Select from './components/Select.vue';
import Car from './components/Car.vue'
import Simulation from './components/Simulation.vue'
import api from './services/api.js'
</script>


<template>
  <div class="main">
    <h3>Simulação de Financiamento</h3>
    
    <Select @submit="(data) =>send(data)" />
    <div v-show="$store.state.car" class="sect">
      <Car :car="$store.state.car"/>
      <Simulation :six="six" :twelve="twelve" :fortyeight="fortyeight" :car="$store.state.car"/>
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
    margin: 50px 0 20px 0;
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
    margin-bottom: 30px;
  }
}



</style>

<script>
import '../src/styles/globals.css';
export default {
  name: 'App',
  data() {
    return {
      car: 1,
      simulate: [],
      six: '',
      twelve: '',
      fortyeight: ''
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
      send(data){
        this.$store.state.car = data
        this.simulate['vehicle_id'] = data.id
        this.simulate['down_payment'] = data.down_payment
        
        api.post('/simulate',{vehicle_id: this.simulate['vehicle_id'], down_payment: this.simulate['down_payment']})
        .then((response) =>{
          if(response.status ==200) {
            this.six = response.data.installments['6'].installment_price
            this.twelve = response.data.installments['12'].installment_price
            this.fortyeight = response.data.installments['48'].installment_price
           }
         
        
        })
        .catch(function (error) {
          console.log(error);
        });

      }
    }
}

</script>
