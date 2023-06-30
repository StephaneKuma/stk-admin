<template>
    <div>
        <hello-world />
        <router-link :to="{name: 'Page2'}">Go to page 2</router-link>
    </div>
</template>

<script setup>
import { onMounted } from "vue"

onMounted(() => {
    console.log('Page 1')
})
</script>
