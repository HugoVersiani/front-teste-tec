<template>
    <header>
        <a href="https://listradigital.com.br/" id="logo" alt="logo">
            <img  src="../assets/logo.png">
        </a>
    </header>
</template>
<script>

export default {
    name: 'Header'
    
}
</script>

<style scoped>
    header {
        background-color: var(--color-primary);
    }

    #logo {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
    }
</style>