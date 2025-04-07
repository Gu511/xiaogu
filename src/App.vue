<template>
  <div>
    <h1>你好-{{ fullName }}</h1>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const fullName = ref('世界')
</script>
<style scoped>

</style>
