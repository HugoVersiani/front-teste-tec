<script setup>

</script>

<template>
    <section class="shadow simulations_card">
        <h5>Valores simulados para você</h5>
        <div class="main-div">
            <div class="set installment shadow">
                <span class="installments">6x</span>
                <span class="price">R$ 9.917</span>
            </div>
            <div class="set">
                <div class="installm installment shadow">
                    <span class="installments">6x</span>
                    <span class="price">R$ 9.917</span>
                </div>
                <div class="installm installment shadow">
                    <span class="installments">6x</span>
                    <span class="price">R$ 9.917</span>
                </div>
            </div>
         
        </div>
        <div class="call">
            <button>
                <ion-icon name="logo-whatsapp"></ion-icon>Falar com consultor
            </button>
            <span>
                (31) 3441-0240
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
    margin: 5px;
    display: flex;
    flex-direction: column;
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

ion-icon {
    color: #ffffff;
    padding-right: 5px;
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
    margin: 5px;
    display: flex;
    flex-direction: column;
}

.set{
    width: 100%;
    display: flex;
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

ion-icon {
    font-size: 0.9em;
}
    

}

</style>
