<template>
  <div>
    <h1>你好-{{ msg }}</h1>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const fullName = ref('张三')
</script>
<style scoped>

</style>
