import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
            meta: {title: "首页"}
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue'),
            meta: {title: "用户登录"}
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/RegisterView.vue'),
            meta: {title: "用户注册"}
        },
        {
            path: '/rank',
            name: 'rank',
            component: () => import('@/views/RankView.vue'),
            meta: {title: "队伍排行"}
        },
        {
            path: '/information',
            name: 'information',
            component: () => import('@/views/InformationVue.vue'),
            meta: {title: "个人/队伍信息"}
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue'),
            meta: {title: "简介"}
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('@/views/admin/HomeView.vue'),
            meta: {title: "管理大屏"},
            children: [
                {
                    path: '/admin/login',
                    name: 'admin-login',
                    component: () => import('@/views/admin/LoginView.vue'),
                    meta: {title: "管理员登录"}
                },
                {
                    path: '/admin/games',
                    name: 'games',
                    component: () => import('@/views/admin/GamesView.vue'),
                    meta: {title: "比赛管理"}
                },
                {
                    path: '/admin/teams',
                    name: 'teams',
                    component: () => import('@/views/admin/TeamsView.vue'),
                    meta: {title: "队伍管理"}
                },
                {
                    path: '/admin/challenges',
                    name: 'challenges',
                    component: () => import('@/views/admin/ChallengesView.vue'),
                    meta: {title: "题目管理"}
                },
                {
                    path: '/admin/flags',
                    name: 'flags',
                    component: () => import('@/views/admin/ChallengesView.vue'),
                    meta: {title: "flag管理"}
                },
                {
                    path: '/admin/config',
                    name: 'config',
                    component: () => import('@/views/admin/ConfigView.vue'),
                    meta: {title: "平台配置"}
                }
            ]
        }
    ]
})

export default router