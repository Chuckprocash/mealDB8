<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, watch } from "vue";
import spoon from "../assets/spoon.svg";
import burger from "../assets/burger.svg";

const route = useRoute();
const showMenus = ref(false);


const toggleMenus = () => {
    showMenus.value = !showMenus.value;
};
setTimeout(() => {
    document.querySelector('main').addEventListener('click', () => {
        if(showMenus.value) {
            showMenus.value = false;
  }
});
}, 100);
watch(() => route.name, () => {
  showMenus.value = false;
});
</script>
<template>
  <header class="fixed top-0 left-0 w-full z-50">
    <div class="bg-white shadow h-15 flex items-center justify-between">
      <div>
        <RouterLink
          :to="{ name: 'home' }"
          class="h-full hover:bg-purple-100 py-5 px-5 cursor-pointer"
          >Home</RouterLink
        >
      </div>
      <div class="flex gap-1 menu-items">
        <div>
          <RouterLink
            :to="{ name: 'meals-name' }"
            class="h-full text-left hover:bg-purple-100 py-5 px-3 cursor-pointer"
            >Search Meals</RouterLink
          >
        </div>
        <div>
          <RouterLink
            :to="{ name: 'meals-letter' }"
            class="h-full text-left hover:bg-purple-100 py-5 px-3 cursor-pointer"
            >Meals By Letter</RouterLink
          >
        </div>
        <div>
          <RouterLink
            :to="{ name: 'meals-ingredients' }"
            class="h-full text-left hover:bg-purple-100 py-5 px-3 cursor-pointer"
            >Meals By Ingredients</RouterLink
          >
        </div>
      </div>

      <div class="menus hidden p-2">
        <img
          :src="showMenus ? spoon : burger"
          alt="menus"
          class="h-8 w-8 cursor-pointer hover:scale-110 text-gray-400"
          @click="toggleMenus"
        />
      </div>
    </div>
    <div
          v-show="showMenus"
          class="absolute bg-white shadow-lg rounded-lg p-4 dropdown hidden"
        >
          <RouterLink
            :to="{ name: 'meals-name' }"
            class="block hover:bg-purple-100 py-2 px-3"
            >Search Meals</RouterLink
          >
          <RouterLink
            :to="{ name: 'meals-letter' }"
            class="block hover:bg-purple-100 py-2 px-3"
            >Meals By Letter</RouterLink
          >
          <RouterLink
            :to="{ name: 'meals-ingredients' }"
            class="block hover:bg-purple-100 py-2 px-3"
            >Meals By Ingredients</RouterLink
          >
        </div>
  </header>
</template>
<style scoped>
@media (max-width: 550px) {
  .menu-items {
    display: none;
  }
  .menus {
    display: block;
  }
  .dropdown {
    display: block;
    position: absolute;
    right: 0;
    top:50px;
    width: 100vw;
    text-align: center;
  }
}

</style>
