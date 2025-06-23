<script setup>
import Layouts from "./components/Layouts.vue";
</script>

<template>
  <div class="container m-auto bg-gray-100 min-h-screen">
    <Layouts>
      <router-view />
    </Layouts>
  </div>
</template>

<style scoped></style>
