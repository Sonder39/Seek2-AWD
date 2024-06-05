<script setup>

import Progress from "@/components/admin/Progress.vue";
import {ref} from "vue";
import LogPanel from "@/components/admin/LogPanel.vue";
import Panel from "@/components/admin/Panel.vue";
import RankPanel from "@/components/admin/RankPanel.vue";

const localDateRef = ref(new Date().toLocaleString())
setInterval(() => {
  localDateRef.value = new Date().toLocaleString()
}, 1000)
</script>

<template>
  <div class="row">
    <div class="col-6">
      <h1>{{ localDateRef }}</h1>
      <Progress/>
      <LogPanel/>
    </div>
    <div class="col-6">
      <RankPanel/>
      <Panel/>
    </div>
  </div>

</template>

<style scoped>

</style>