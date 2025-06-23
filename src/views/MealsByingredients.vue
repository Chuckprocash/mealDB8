<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref, computed, watch } from 'vue';
import Mealcard from './MealCard.vue';
import axiosClient from '../axiosClient.js';
import store from '../store';

const route = useRoute();
const router = useRouter();
const ingredients = ref([]);
const searchIngredient = ref('');

const meals = computed(() => store.state.MealsByIngredients );

const mealSearch = () => {
    if (searchIngredient.value.trim() === '') {
        return;
    }
    const ingredient = searchIngredient.value.trim().toLowerCase();
    const foundIngredient = ingredients.value.find(i => i.strIngredient.toLowerCase() === ingredient);
    
    if (foundIngredient) {
        router.push({ name: 'meals-ingredients', params: { ingredient: foundIngredient.strIngredient } });
    } else {
        alert('Ingredient not found');
    }
};

watch(() => route.params.ingredient, (newIngredient) => {
    if (newIngredient) {
        store.dispatch('searchMealsByIngredients', route.params.ingredient);
    }
});

onMounted(() => {
    axiosClient.get('list.php?i=list')
        .then(({ data }) => {
            // console.log(data)
            ingredients.value = data.meals;
        });
    if(route.params.ingredient){
        store.dispatch('searchMealsByIngredients', route.params.ingredient);
    }
});
</script>
<template>
    <div class="flex p-8 pb-0 justify-center">
    <input
      type="text"
      v-model="searchIngredient"
      class="rounded border-2 border-gray-200 p-2 w-full bg-white focus:outline-none focus:border-blue-400"
      placeholder="Search for ingredients..."
      @keyup.enter="mealSearch"
    />
  </div>
  <div v-if="route.params.ingredient" class="p-4 italic bg-white rounded shadow-md m-4">
    {{ ingredients.filter(i => i.strIngredient.toLowerCase() === route.params.ingredient.toLowerCase())[0]?.strDescription }}
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    <Mealcard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
    <h1 class="text-4xl p-1 pb-2 font-bold">Main Ingredients:</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 p-1 max-h-[40vh] overflow-y-auto scrollbar-none">
        <div class="overflow-hidden cursor-pointer hover:text-blue-500 p-0" v-for="ing in ingredients.filter(i => i.strDescription)">
            <router-link :to="{ name: 'meals-ingredients', params: { ingredient: ing.strIngredient } }">
                <pre>{{ ing.strIngredient }}</pre>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
    .scrollbar-none {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    .scrollbar-none::-webkit-scrollbar {
        display: none;
    }
</style>