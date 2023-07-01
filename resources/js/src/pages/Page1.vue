<template>
    <div>
        <hello-world />
        <router-link :to="{name: 'Page2'}">Go to page 2</router-link>
    </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useRouter } from "vue-router";
const router = useRouter();


onMounted(() => {
    console.log('Page 1')
    console.log(router.currentRoute.value)
})
</script>
