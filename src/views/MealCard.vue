<script setup>

    const props = defineProps({
        meal: {
            type: Object,
            required: true
        }
    });
</script>
<template>
    <div class="bg-white rounded-xl shadow card flex flex-col">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full object-cover h-48"/>
      <div class="p-3 flex flex-col gap-2 flex-1">
        <h4 class="font-bold flex-1">{{ meal.strMeal }}</h4>
        <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> -->
        <div class="flex justify-between items-center gap-4">
          <a :href="meal.strYoutube" target="_blank" class="flex-1 text-center px-2 py-1 border-orange-700 rounded border hover:bg-orange-600 hover:text-white transition-color">Youtube</a>
          <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}" class="flex-1 text-center px-2 py-1 border-orange-700 rounded border hover:bg-orange-600 hover:text-white transition-color">Details</router-link>
        </div>
      </div>
    </div>
</template>
<style scoped>
    @media(min-width: 450px){
        .card{
            max-width: 400px;
        }
    }
</style>