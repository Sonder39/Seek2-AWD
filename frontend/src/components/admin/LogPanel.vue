<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const logsRef = ref([]);
onMounted(async () => {
  const response = await axios.get("http://localhost:9999/api/admin/logs");
  logsRef.value = response.data
})
</script>

<template>
  <div class=".log-panel mt-2">
    <ul>
      <li v-for="log in logsRef" :key="log.ID">{{ log.Content }}</li>
    </ul>
  </div>
</template>

<style scoped>
</style>