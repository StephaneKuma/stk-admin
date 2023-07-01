<template>
    <side-bar />

    <navbar />

    <main id="main-container">
        <div class="content">
            <router-view />
        </div>
    </main>

    <credits />
</template>

<script setup>
import SideBar from "@components/layouts/SideBar.vue";
import Navbar from "@components/layouts/Navbar.vue";
import Credits from "@components/layouts/Credits.vue";
// import { useRouter } from 'vue-router';

// const router = useRouter();

// console.log(router)
</script>
