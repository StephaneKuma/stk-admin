<template>
    <div>
        <hello-world />
        <router-link :to="{name: 'Page1'}">Go to page 1</router-link>
    </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useRouter } from "vue-router";
const router = useRouter();


onMounted(() => {
    console.log('Page 2')
    console.log(router.currentRoute.value)
})
</script>
