<script setup>
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
import store from "../store";
import MealCard from './MealCard.vue';

const route = useRoute();
const searchQuery = ref("");

const mealSearch = () => {
  if (searchQuery.value.trim() === "") {
    alert("Please enter a search term.");
    return;
  }
  const query = searchQuery.value.trim().toLowerCase();
  // axiosClient.get(`search.php?s=${query}`)
  store.dispatch("searchMeals", query);
};

const meals = computed(() => {
  return store.state.searchedMeals;
});
onMounted(() => {
  searchQuery.value = route.params.name || "";
  if (searchQuery.value) {
    mealSearch();
  }
});
</script>
<template>
  <div class="flex p-8 pb-0 justify-center">
    <input
      type="text"
      v-model="searchQuery"
      class="rounded border-2 border-gray-200 p-2 w-full bg-white focus:outline-none focus:border-blue-400"
      placeholder="Search for meals..."
      @keyup.enter="mealSearch"
    />
  </div>
  <div v-if="!meals" class="p-4 m-4 bg-white shadow text-red-800 text-center">No Data Found!</div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
    <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>
<style scoped></style>
