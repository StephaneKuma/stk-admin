<template>
    <div>
        <input type="text" v-model.lazy.trim="name">
        <h1>Hello <strong>{{ name }}</strong>!</h1>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const name = ref('');
</script>
