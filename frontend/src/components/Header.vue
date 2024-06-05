<script setup>

</script>

<template>
  <div class="navbar bg-primary-subtle">
    <span class="navbar-brand">导航栏</span>
    <div class="nav-links">
      <router-link to="/" class="nav-link">首页</router-link>
      <router-link to="/login" class="nav-link">登录</router-link>
      <router-link to="/register" class="nav-link">注册</router-link>
      <router-link to="/rank" class="nav-link">排行</router-link>
      <router-link to="/information" class="nav-link">个人资料</router-link>
      <router-link to="/about" class="nav-link">关于</router-link>
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
