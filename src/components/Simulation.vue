<script setup>

</script>

<template>
    <section class="shadow simulations_card">
        <h5>Valores simulados para você</h5>
        <div class="main-div">
            <div class="set installment shadow">
                <span v-if="!six" class="skeleton installments config"></span>
                <span v-if="six" class="installments">6x</span>
                <span v-if="six" class="price">R$ {{six}}</span>
            </div>
            <div class="set">
                <div class="installm installment shadow">
                    <span v-if="!twelve" class="skeleton installments config"></span>
                    <span v-if="twelve" class="installments">12x</span>
                    <span v-if="twelve" class="price">R$ {{twelve}}</span>
                </div>
                <div class="installm installment shadow">
                    <span v-if="!fortyeight" class="skeleton installments config"></span>
                    <span v-if="fortyeight" class="installments">48x</span>
                    <span v-if="fortyeight"  class="price">R$  {{fortyeight}}</span>
                </div>
            </div>
         
        </div>
        <div class="call">
            <button>
            <ion-icon class="whats" name="logo-whatsapp"></ion-icon> Falar com consultor
            </button>
            <span>
                <ion-icon name="call-sharp"></ion-icon>(31) 3441-0240
            </span>
          </div>
    </section>
</template>

<style scoped>
.simulations_card {
    height: auto;
    background-color: var(--color-secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 20px 0;
    margin-bottom: 10px ;
}

.installments {
    font-size: 1.1em;
    font-weight: 600;
    padding: 10px 0 0 10px;

}

.main-div {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.installment {
    width: 100%;
    margin: 0 0 10px 0;
    display: flex;
    flex-direction: column;
}
.config {
    min-height: 70px;
}

.set {
    width: 100%;
}


.price {
    font-size: 1.4em;
    font-weight: 700;
    padding: 0 0 10px 10px;
    color: var(--color-primary);
}

button {
    background-color: #1ABB59;
    font-size: 1.2em;
    height: 39px;
    border-radius: 100px;
    cursor: pointer;
    border: none;
    color: #ffffff;
    padding: 0 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-top: 5px;
}


h5 {
    display: none;
}
.call {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.whats {
    color: var(--color-secondary)
}

@media (min-width: 700px) {  
    
.simulations_card {
    width: 80%;
    margin-left: 30px;
    align-items: start;
    padding: 20px 0 20px 20px;
}

h5 {
    display: block;
    font-size: 1.5em;
    position: relative; 
    font-weight: 400;
    margin-bottom: 20px;
  }

h5:after {
  display: block;
  content: '';
  width: 10%;
  height: 4px;
  background: var(--color-primary);
  position: absolute;
  bottom: 0;
  left: 0;
}

.main-div {
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.installment {
    margin: 0 0 10px 0;
    display: flex;
    flex-direction: column;
}
.installment:last-child {
    margin: 0 0 10px 10px;
}

.set{
    width: 100%;
    display: flex;
    margin-right: 0;
}
.installm {
    width: 50%;
}

.call {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    justify-content: start;
    width: 80%;
}
.call>span {
    font-size: 0.9em
}

.call>button {
    width: 30%;
    font-size: 0.9em;
    display: flex;
    justify-content: center;
    margin: 0 10px;
}



}

</style>

<script>
export default {
    name: 'Simulation',
    
    props: {
        id: Number,
        six: String,
        twelve: String,
        fortyeight: String
    }
    
}
</script>
