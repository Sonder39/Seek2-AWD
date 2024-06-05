<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const scoresRef = ref([]);

onMounted(async () => {
  const response = await axios.get("http://localhost:9999/api/admin/rank");
  scoresRef.value = response.data.sort((a, b) => b.points - a.points);
});
</script>

<template>
  <div class=".rank-panel mt-2">
    <ul>
      <li v-for="(score, index) in scoresRef" :key="score">
        {{ index + 1 }}. {{ score.name }}: {{ score.points }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>