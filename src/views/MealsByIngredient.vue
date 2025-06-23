<script setup>
    import { onMounted, ref, computed } from 'vue';
    import axiosClient from '../axiosClient';
    import { useRoute } from 'vue-router';
    import store from '../store'

    const route = useRoute();
    const meals = computed(() => store.state.MealsByIngredients );

    console.log(route.params.ingredient)
    onMounted(() => {
        if(route.params.ingredient){
                store.dispatch('searchMealsByIngredients', route.params.ingredient);
        }
    });

    setTimeout(() => {
        console.log(meals.value)
    }, 5000);

</script>
<template>
    <pre>{{ meals }}</pre>
</template>
<style scoped></style>