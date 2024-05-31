<template>
  <div>
    <Header v-if="!isAdmin"/>
    <AdminHeader v-else/>
  </div>
  <router-link to="/" class="btn btn-secondary" @click="isAdmin=!isAdmin">管理员界面/用户界面切换
  </router-link>
  <div>
    <router-view/>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Header from "@/components/Header.vue";
import AdminHeader from "@/components/admin/Header.vue";

const isAdmin = ref(false)

</script>