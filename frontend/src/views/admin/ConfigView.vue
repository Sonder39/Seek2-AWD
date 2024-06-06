<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const configLabels = {
  "title": "比赛名",
  "flag_prefix": "Flag前缀",
  "flag_suffix": "Flag后缀",
  "animate_asteroid": "更绚丽的Asteroid大屏",
  "show_others_gamebox": "队伍靶机互相可见"
};
const configRef = ref([]);
onMounted(async () => {
  const response = await axios.get("http://localhost:9999/api/admin/configs");
  configRef.value = response.data.data.map(config => ({
    config, Key: configLabels[config.Key], Value: config.Value
  }));
})

const updateConfig = async (config) => {
  const response = await axios.put("http://localhost:9999/api/admin/config", config);
  window.alert(response.data.msg);
};
</script>

<template>
  <div class="m-2" v-for="(config, index) in configRef " :key="index">
    <label class="m-1">{{ config.Key }}</label>
    <input class="rounded-1" v-model="config.Value"/>
  </div>
  <button class="btn btn-outline-primary m-2" @click="updateConfig(configRef)">更新配置</button>
</template>

<style scoped>

</style>