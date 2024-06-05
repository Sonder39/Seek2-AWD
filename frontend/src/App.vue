<template>
  <div>
    <Header v-if="!isAdmin"/>
    <AdminHeader v-else/>
  </div>
  <div class="toggle-btn">
  <router-link to="/" class="btn btn-secondary" @click="isAdmin=!isAdmin">管理员界面/用户界面切换
  </router-link>
</div>
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

<style scoped>
.toggle-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.btn {
  width: 100px; /* 圆形按钮的宽度 */
  height: 100px; /* 圆形按钮的高度 */
  border-radius: 50%; /* 将按钮变成圆形 */
  background-color: #007bff; 
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 添加一些阴影效果 */
  color: white;
  font-size: 14px; /* 图标的大小 */
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3; 
}
</style>