<script setup>

import Progress from "@/components/Progress.vue";
import {ref} from "vue";

const localDateRef = ref(new Date().toLocaleString())
setInterval(() => {
  localDateRef.value = new Date().toLocaleString()
}, 1000)
</script>

<template>
  <div class="container py-5 bg-secondary-subtle text-center">Home</div>
  <h1>{{ localDateRef }}</h1>
  <Progress/>
</template>

<style scoped>

</style>