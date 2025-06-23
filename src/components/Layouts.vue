<script setup>
    import Header from './Header.vue';
    import Footer from './Footer.vue';
</script>

<template>
    <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1">
        <slot/>
    </main>
    <Footer />
    </div>
</template>

<style scoped>
    main{
        margin-top: 50px;
    }
</style>
