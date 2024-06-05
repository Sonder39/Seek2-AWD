<script setup>
import {ref} from "vue"

const startDate = new Date('2024-05-30T21:51:00').getTime()
const endDate = new Date('2024-05-30T21:52:00').getTime()
const progressRef = ref(0)

setInterval(() => {
  const localDate = new Date().getTime()
  progressRef.value = ((localDate - startDate) / (endDate - startDate)) * 100
}, 1000)
</script>

<template>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" :style="{width: progressRef + '%'}">
    </div>
  </div>
</template>

<style scoped>
</style>