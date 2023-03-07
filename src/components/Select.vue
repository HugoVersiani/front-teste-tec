<script setup>
</script>

<template  >
    <section class="shadow" id="select"> 
        
        <h5>Selecione um veículo e insira o seu valor de entrada:</h5>
        <div id="main">
            <select v-model="car">
              
                <option  v-bind:value="car"  v-for="car in $store.state.cars" >{{car.model}}</option>
            </select>
            <input v-model="car['down_payment']" type="number" placeholder="Entrada" maxlength="8" size="10">
          
            <button @click="$emit('submit', car)">
                Simular
            </button>
        
        </div>
    </section>
</template>

<style scoped>

#select {
    background-color: var(--color-secondary);
    padding: 2%;
    height: auto;
}

h5 {
    font-size: 1em;
    font-weight: 500;
    padding: 2%;
}

#main {
    margin: 10px 0 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

select {
    
    width: 80%;
    padding: 10px 5px;
    border: 1px solid #E5E5E5;
    margin: 0 0 10px 0;
}


input {
    width: 80%;
    padding: 10px 5px;
    border: 1px solid #E5E5E5;
    margin: 0 0 10px 0;
}

input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}

button {
    width: 50%;
    background-color: var(--color-primary);
    border: none;
    color: #ffffff;
    font-size: 1.2em;
    height: 39px;
    
    border-radius: 100px;
}

@media(min-width:700px) {

    h5 {
        font-size: 1em;
        font-weight: 500;
        padding: 0;
    }

    #main {
        margin: 10px 0 ;
        display: flex;
        flex-direction:row;
        align-items: end;
        
    }

    select {
        width: 30%;
        padding: 10px 5px;
        border: 1px solid #E5E5E5;
        margin: 0 10px 0 0;
    }


    input {
        width: 20%;
        padding: 10px 5px;
        border: 1px solid #E5E5E5;
        margin: 0 10px 0 0;
    }


    button {
        width: 15%;
        background-color: var(--color-primary);
        border: none;
        color: #ffffff;
        font-size: 1.2em;
        height: 39px;
        border-radius: 100px;
        cursor: pointer
    }

}


</style>
<script>

export default {
    name: 'Select',
    data() {
      return {
        car: '',
        down_payment: ''
      } 
    },
    created(){
        
        
    },
    methods: {
      
    }
    
}
</script>