<script setup>
</script>
<template>
    <div class="toast success" v-if="color == 'success'">
       {{msg}}
    </div>
    <div class="toast danger" v-if="color == 'danger'">
       {{msg}}
    </div>
</template>
<style scoped>
.toast {
    color: #fff;
    padding: 20px 10px;
    border-radius: 5px;
    width: 100%;
    margin: 10px 0 ;
}
.danger {
    border: 4px solid rgb(255, 166, 166);
    background-color:   rgb(255, 108, 108);
}
.success {
    border: 4px solid rgb(200, 255, 200);
    background-color:  rgb(146, 255, 146);
    color: rgb(51, 90, 51);
}
</style>
<script>
export default {
  name: 'Toast',
  props: {
        color: String,
        msg: String,
    },
 
}
</script>
