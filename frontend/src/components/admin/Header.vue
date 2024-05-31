<script setup>

</script>

<template>
  <div class="bg-primary-subtle">
    <span>导航栏</span>
    <router-link to="/admin" class="btn btn-secondary">首页</router-link>
    <router-link to="/admin/login" class="btn btn-secondary">登录</router-link>
    <router-link to="/admin/games" class="btn btn-secondary">比赛管理</router-link>
    <router-link to="/admin/teams" class="btn btn-secondary">队伍管理</router-link>
    <router-link to="/admin/challenges" class="btn btn-secondary">题目管理</router-link>
    <router-link to="/admin/flags" class="btn btn-secondary">flag管理</router-link>
    <router-link to="/admin/config" class="btn btn-secondary">平台配置</router-link>
  </div>
</template>

<style scoped>

</style>