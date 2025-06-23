<script setup>
    import { onMounted, ref, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import axiosClient from '../axiosClient';
    // import soup from '../../public/soup-icon.svg';

    const route = useRoute();
    const mealId = ref(route.params.id);
    const meal = ref({});
    const fullInstructions = ref(false);
    const toggleInstructions = () => {
        fullInstructions.value = !fullInstructions.value;
    };

    const strInstructions = computed(() => {
        if (!meal.value.strInstructions) {
            return '';
        }
        return fullInstructions.value ? meal.value.strInstructions : meal.value.strInstructions.slice(0, 100) + '...';
    });

    onMounted(() => {
        if(mealId.value == ""){return}
        axiosClient.get(`lookup.php?i=${mealId.value}`)
            .then(({ data }) => {
                // debugger;
                meal.value = data.meals[0] || {};
            });
        // setTimeout(() => {
        //     console.log(meal.value);
        // }, 5000);
    });


</script>
<template>
    <div class="container max-w-full sm:max-w-[80%] md:max-w-[600px] mx-auto p-8">
        <div class="cart">
            <div class="flex items-center mb-4">
                <img src="/soup-icon.svg" alt="food" class="inline-block w-8 h-8 mr-2" />
                <h1 class="text-2xl font-bold">{{ meal.strMeal }}</h1>
            </div>
            <p>Taste: <span class="font-semibold">{{ meal.strArea }}</span>
                Category: <span class="font-semibold">{{ meal.strCategory }}</span>
                Tags: <span class="font-semibold">{{ meal.strTags }}</span>
            </p>
            <p class="text-gray-700">
                <span class="font-semibold">How To Cook: </span>
                {{ strInstructions }}
                <span v-if="!fullInstructions" class="text-blue-500 cursor-pointer" @click="toggleInstructions">Read more</span>
                <span v-else class="text-blue-500 cursor-pointer" @click="toggleInstructions">Read less</span>
            </p>
            <div class="p-2 border-1 border-gray-100 bg-white rounded-xl ">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full rounded" />
            </div>
            <h2 class="text-xl font-semibold py-2">Recepie:</h2>
            <div class="recepie grid-cols-3 grid gap-4 mb-4">
                <div class="ingredients grid grid-cols-1 gap-2 ">
                    <p class="border-t-1 border-gray-500" v-for="(ingredient, index) in Object.keys(meal).filter(key => key.startsWith('strIngredient') && meal[key])" :key="index">
                    {{ meal[ingredient] }}</p>
                </div>
                <div class="measurements grid grid-cols-1 gap-2 col-span-2">
                    <p class="border-t-1 border-gray-500" v-for="(measurement, index) in Object.keys(meal).filter(key => key.startsWith('strMeasure') && meal[key] && meal[key] !=' ')" :key="index">
                    {{ meal[measurement] }}</p>
                </div>
            </div>
            <p><strong>Source: </strong><a :href="meal.strSource" target="_blank" class="text-blue-500 text-sm">{{ meal.strSource }}</a></p>
        </div>
    </div>
</template>
<style scoped></style>