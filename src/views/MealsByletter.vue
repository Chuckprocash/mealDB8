<script setup>
import { useRoute } from "vue-router";
import { ref, computed, onMounted, watch } from "vue";
import store from "../store";
import MealCard from "./MealCard.vue";

const route = useRoute();
const meals = computed(() => store.state.MealsByLetter);
const letter = ref(route.params.letter);

onMounted(() => {
  if(letter.value){
    store.dispatch("searchMealsByLetter", letter.value);
  }
  // console.log(letter.value);
});

watch(route, () => {
    if(route.params.letter) {
        store.dispatch("searchMealsByLetter", route.params.letter);
    }
});
</script>
<template>
  <div class="flex gap-x-4 gap-y-2 justify-center mt-5 wrap">
    <router-link
      class="text-2xl text-gray-500 hover:text-gray-800"
      v-for="letter in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"
      :key="letter"
      :to="{ name: 'meals-letter', params: { letter } }"
    >
      {{ letter }}
    </router-link>
  </div>
  <div v-if="meals !=='no data found'" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
      <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
  </div>
</template>
<style scoped>
    .wrap{
    flex-wrap: wrap;
    }
</style>
