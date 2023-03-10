<script setup>
    import api from '../services/api.js'
    import Toast from '../components/Toast.vue';
</script>
<template>
<div class="main-div">
 

  <form class="shadow main-form">
  <Toast :color="toast.color" :msg="toast.msg" v-if="toast.show"/>   
    
      <label for="email">Email:</label>
      <input type="text" id="email"  v-model="email">
      
      <label for="password">Password:</label>
      <input type="password"  id="password" v-model="password">
      
     <div class="btn"><button type="submit" @click.prevent="login">Log in</button></div>
 
    
  </form>
  </div>
</template>
<style scoped>
.main-div {
    display: flex;
     justify-content:center;
    align-items: center;
    align-self: center;
    margin-top: 10%
}

.main-form {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: start;
    align-self: center;
    height: 80%;
    background-color: var(--color-secondary);
    padding: 20px;

}


input {
    width: 100%;
    padding: 10px 5px;
    border: 1px solid #E5E5E5;
    margin: 0 0 10px 0;
}

button {
    width: 100%;
    background-color: var(--color-primary);
    border: none;
    color: #ffffff;
    font-size: 1.2em;
    height: 39px;
    border-radius: 100px;
    cursor: pointer;
}
.btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

@media(min-width: 700px) {

  .main-form {
     width: 20%;
  }

}
</style>

<script>
export default {
  components: { Toast },
  data() {
    return {
      email: '',
      password: '',
      toast: {
        show: false,
        color: '',
        msg: ''
      }
    }
  },
  methods: {
    callToast(color, msg) {
      this.toast.show = true;
      this.toast.color = color;
      this.toast.msg = msg

    },
    login() {
       api.post('/login',{email: this.email, password: this.password})
        .then((response) =>{
            localStorage.setItem('token', response.data.access_token)
            this.$router.push('/dashboard')
            
        })
        .catch((error) => {
          console.error(error);
          this.callToast('danger', 'Usuário não autenticado.');
        });
    }
  },
  created() {
    this.toast.show = false
  }
};
</script>