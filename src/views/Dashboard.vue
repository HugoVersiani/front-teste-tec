<script setup>
    import api from '../services/api.js'
    import Toast from '../components/Toast.vue'
</script>
<template>
  <div class="main-div shadow">
    <Toast :color="toast.color" :msg="toast.msg" v-if="toast.show"/>   
    <h2>Cadastro de veículos</h2>
        <form class="main-form" @submit.prevent="submitForm">
            <div class="col">
                <div class="input-div">
                    <label for="city">Cidade:</label>
                    <input type="text" id="city" v-model="car.city" />
                </div>
                <div class="input-div">
                    <label for="make">Fabricante:</label>
                    <input type="text" id="make" v-model="car.make" />
                </div>
                <div class="input-div">
                    <label for="model">Modelo:</label>
                    <input type="text" id="model" v-model="car.model" />
                </div>
                <div class="input-div">
                    <label for="year">Ano:</label>
                    <input type="numeber" id="year" v-model="car.year" />
                </div>
                <div class="input-div">
                    <label for="km">Kilometragem:</label>
                    <input type="number" id="km" v-model="car.km" />
                </div>
            </div>
            <div class="col">
                <div class="input-div">
                    <label for="description">Descrição:</label>
                    <textarea id="description" v-model="car.description"></textarea>
                </div>
            
                <div class="input-div select">
                    <label for="transmission">Transmissão:</label>
                    <select id="transmission" v-model="car.transmission">
                    <option value=0 >Manual</option>
                    <option value=1 >Automático</option>
                    </select>
                </div>
                <div class="input-div">
                    <label for="phone">Telefone:</label>
                    <input type="text" id="phone" v-model="car.phone" />
                </div>
                <div class="input-div">
                    <label for="price">Preço:</label>
                    <input type="number" id="price" v-model="car.price" />
                </div>
                <div class="input-div">
                    <label for="image">Imagem:</label>
                    <input type="file" id="image" @change="handleFileUpload" />
                </div>
                <div class="btn"><button type="submit">Cadastrar</button></div>
            </div>
    </form>
  </div>
</template>
<style scoped>


input {
    width: 100%;
    padding: 10px 5px;
    border: 1px solid #E5E5E5;
    margin: 0 0 10px 0;
}
textarea {
    width: 100%;
    border: 1px solid #E5E5E5;
}

select {
      
    width: 100%;
    padding: 10px 5px;
    border: 1px solid #E5E5E5;
    margin: 0 0 10px 0;
}

.main-div {
    background-color: var(--color-secondary);
    padding: 10px 20px;
}

.toastGreen {
    width: 100%;
    border: 2px solid #8FBB60 ;
    border-radius: 2px;
    background-color: #9fc576;
    color: var(--color-secondary);
    padding: 20px 10px;
    margin-bottom: 10px
}

.toastRed {
    width: 100%;
    border: 2px solid #ff7b5a ;
    border-radius: 2px;
    background-color: #ff7b5a;
    color: var(--color-secondary);
    padding: 20px 10px;
    margin-bottom: 10px
}
.input-div {
    display: flex;
    flex-direction: column
}
.main-form {
    padding: 20px 0;
}
button {
    width: 100%;
    background-color: var(--color-primary);
    border: none;
    color: #ffffff;
    font-size: 1.2em;
    height: 39px;
    border-radius: 100px;
}

@media(min-width: 700px) {

.main-div {
    background-color: var(--color-secondary);
    padding: 40px 40px;
    width: 70%;
    margin: auto;
    margin-top: 40px;
}
.btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
button {
    width: 30%;
}
.select {
    margin-top: 15px
} 

.main-form {

    display: flex;
    flex-direction: row;
  
}

.col {
    width: 50%;
    padding: 0 10px;
}


}

</style>

<script>
export default {
   components: { Toast },
  data() {
    return {
      car: {
        city: '',
        make: '',
        model: '',
        year: 0,
        km: 0,
        description: '',
        transmission: 1,
        phone: '',
        price: 0,
        image: 'default.png'
      },
       toast: {
        show: false,
        color: '',
        msg: ''
      }
    };
  },
  methods: {

    callToast(color, msg) {
        
      this.toast.show = true;
      this.toast.color = color;
      this.toast.msg = msg

    },
    submitForm() {
        
       
       api.post('/vehicle',{
                            city: this.car.city,
                            make: this.car.make,
                            model: this.car.model,
                            year: this.car.year,
                            km: this.car.km,
                            description: this.car.description,
                            transmission: this.car.transmission,
                            phone: this.car.phone,
                            price: this.car.price,
                            image_path: this.car.image},
                            {
                            headers: {
                                'Authorization': 'Bearer' +   localStorage.getItem('token')
                                }
                            })
        .then((response) =>{
            this.callToast('success', 'Veículo cadastrado com sucesso!');
        })
        .catch((error) => {
           
          console.error(error);
          this.callToast('danger', 'Não foi possivel cadastrar o veículo.');
        });
    }
  }
};
</script>