<script setup>
</script>
<template>
<div>

  <form class="shadow main-form">
    
    
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">
      
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password">
      
      <button type="submit" @click.prevent="login">Log in</button>
 
    
  </form>
  </div>
</template>
<style scoped>
div {
    display: flex;
     justify-content:center;
    align-items: center;
    align-self: center;
    height: 50vh;
}

.main-form {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    align-self: center;
    width: 40%;
    height: 50%;
    background-color: var(--color-secondary);

}
</style>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
    
    }
  }
}
</script>