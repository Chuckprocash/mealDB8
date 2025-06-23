<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route.params.letter);


</script>
<template><pre>Hello!!! {{ route.params.letter }}</pre></template>
<style scoped></style>