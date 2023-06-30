import { createRouter, createWebHistory } from "vue-router/dist/vue-router.esm-bundler";

const routes = [
    {
        path: "/admin",
        name: "Page1",
        component: () => import("@/pages/Page1.vue"),
    },
    {
        path: "/admin/page-2",
        name: "Page2",
        component: () => import("@/pages/Page2.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
