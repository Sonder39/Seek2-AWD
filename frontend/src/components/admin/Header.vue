<script setup>

</script>

<template>
  <div class="navbar bg-primary-subtle">
    <span class="navbar-brand">导航栏</span>
    <div class="nav-links">
    <router-link to="/admin" class="nav-link">首页</router-link>
    <router-link to="/admin/login" class="nav-link">登录</router-link>
    <router-link to="/admin/games" class="nav-link">比赛管理</router-link>
    <router-link to="/admin/teams" class="nav-link">队伍管理</router-link>
    <router-link to="/admin/challenges" class="nav-link">题目管理</router-link>
    <router-link to="/admin/flags" class="nav-link">flag管理</router-link>
    <router-link to="/admin/config" class="nav-link">平台配置</router-link>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f0f0f0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-link {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #007bff;
}

</style>