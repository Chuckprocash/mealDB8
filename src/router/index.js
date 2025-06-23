import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MealList from '../views/MealList.vue';
import MealDetails from '../views/MealDetails.vue';
import MealsByname from '../views/MealsByname.vue';
import MealsByletter from '../views/MealsByletter.vue';
import MealsByingredients from '../views/MealsByingredients.vue';
import MealsByingredient from '../views/MealsByingredient.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/alpha/:letter',
        name: 'mealList',
        component: MealList,
    },
    {
        path: '/meal/:id?',
        name: 'mealDetails',
        component: MealDetails,
    },
    {
        path: '/letter/:letter?',
        name: 'meals-letter',
        component: MealsByletter,
    },
    {
        path: '/By-name/:name?',
        name: 'meals-name',
        component: MealsByname,
    },
    {
        path: '/ingredients/:ingredient?',
        name: 'meals-ingredients',
        component: MealsByingredients,
    },
    // {
    //     path: '/ingredient/:ingredient?',
    //     name: 'meals-by-ingredient',
    //     component: MealsByingredient,
    // },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});


export default router;
