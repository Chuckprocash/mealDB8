import axiosClient from "../axiosClient";

export function searchMeals({commit}, query) {
    axiosClient.get(`search.php?s=${query}`)
    .then(({ data }) => {
        // debugger;
        commit('setSearchedMeals', data.meals);
    });

};
export function searchMealsByLetter({commit}, letter) {
    axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
        // debugger;
        commit('setMealsByLetter', data.meals);
    });

};
export function searchMealsByIngredients({commit}, ingredient) {
    axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({ data }) => {
        // debugger;
        commit('setMealsByIngredients', data.meals);
    });

};
// export function searchMealsByIngredients({commit}, meals) {
//         commit('setMealsByIngredients', data.meals);
// };