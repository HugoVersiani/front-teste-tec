<script setup>
</script>
<template>
        <section class="card_data shadow" >
            <div class="img">
                <img src="../assets/carro1.png" alt="fotografia do carro selecionado">
                <span>
                    <ion-icon name="pin"></ion-icon>{{ city }}
                </span>
            </div>
            <div class="data">
               
                <h5>{{ model }} </h5>
                <p>{{ description }}</p>
                <div>
                    <span><ion-icon name="calendar-outline"></ion-icon>{{ year }}</span>
                    <span><ion-icon name="speedometer"></ion-icon>{{ km }} Km</span>
                    <span><ion-icon name="caret-up-circle"></ion-icon>{{ transmission }}</span>
                </div>
                <span class="price">R$ 59.500</span>
            </div>
        </section>
</template>

<style scoped>
    .card_data {
        background-color: var(--color-secondary);
        display: flex;
        flex-direction: column;
        margin: 10px 0;
    }

    .img {
        max-width: 100%;
        position: relative;
    }

    .img>span {
        display: inline;
        background-color: var(--color-secondary);
        position: absolute;
        bottom: 20px;
        left: 0;
        border-radius: 0 50px 50px 0;
        padding: 5px 10px 5px 0;
        
    }
    .img>span>ion-icon {
        color: var(--color-primary)
    }

    img {
        width: 100%;
    }

    h5 {
        font-size: 1.3em;
    }

    .data {
        padding: 5px 20px;
    }

    .data>p {
        font-size: 0.9em;
        padding: 3px 0;
    }

    .data>div {
        padding: 3px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .data>div>span>ion-icon {
        font-size: .9em;
        padding-right: 5px;
        color: rgba(68, 68, 68, 0.7);
    }

    .data>div>span {
        font-size: .9em;
        padding: 5px 0;
    }

    .price {
        font-size: 1.5em;
        font-weight: bolder;
        padding: 10px 0 10px 0;

    }

    
@media(min-width:700px) {
    .card_data {
        min-width: 30%;
        max-width: 30%;
    }


 }




    

</style>
<script>
export default {
    name: 'Car',
    props: {
        car: Array
    },
    data() {
       return {
        model: '',
        description: '',
        city: '',
        make: '',
        year: '',
        phone: '',
        price: '',
        transmission: '',
        image: '',
        km: '',
       }
       
    },
    methods() {
        
    },
    watch: { 
      	car(car) {
           
            this.model = car.model
            this.description = car.description
            this.city = car.city
            this.make = car.make
            this.year = car.year
            this.phone = car.phone
            this.price = car.price
            this.transmission = car.transmission
            this.km = car.km
            
         
        }
      }

}
</script>