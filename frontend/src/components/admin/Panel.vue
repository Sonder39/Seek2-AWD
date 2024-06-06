<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const panelDataRef = ref([])
onMounted(async ()=>{
  const response = await axios.get("http://localhost:9999/api/admin/panel")
  panelDataRef.value = response.data.data
  // window.alert(response.data.msg)
})
</script>

<template>
  <div class=".panel mt-2">
    <p>SubmitFlag: {{ panelDataRef.SubmitFlag }}</p>
    <p>CheckDown: {{ panelDataRef.CheckDown }}</p>
    <p>MemAllocated: {{ panelDataRef.MemAllocated }}</p>
    <p>NumGoroutine: {{ panelDataRef.NumGoroutine }}</p>
  </div>
</template>

<style scoped>

</style>