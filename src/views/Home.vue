<script setup>

import { ref, computed, onMounted } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";
import MealCard from './MealCard.vue';

// const meals = computed(() => store.state.meals);
const meals = ref([]);
const area = ref(['Indian', 'Turkish']);
meals.value = store.state.MealsByCountry || [];
console.log(meals.value)
console.log(store.state.MealsByCountry)
const randomMeals = computed(() => {
  const shuffled = meals.value.sort(() => 0.5 - Math.random());
  const randomTen = shuffled.slice(0, 10);
  return randomTen;
});

onMounted( async () => {
  if(!meals.value.length) {
    for(let a of area.value){
      const response = await axiosClient.get('filter.php?a=' + a );
      meals.value.push(...response.data.meals);
    }
    store.commit('setMealsByCountry', meals.value);
  }
});
</script>

<template>
  <div class="flex flex-col p-8">
    <h1 class="text-2xl font-bold mb-4">Random Meals</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <MealCard v-for="meal in randomMeals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<style scoped></style>
