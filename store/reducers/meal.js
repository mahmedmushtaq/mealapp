import {MEALS} from "../../data/dummy-data";
import {FILTER_SETTING, TOGGLE_FAVOURITE} from "../actions/meals";
const initialState = {
     meals:MEALS,
     filteredMeals:MEALS,
     favouriteMeals:[],
}

const mealReducer = (state=initialState,actions)=>{
    switch (actions.type) {
        case TOGGLE_FAVOURITE:
            const existingIndex = state.favouriteMeals.findIndex(
                meal => meal.id === actions.mealId
            );
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favouriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return { ...state, favouriteMeals: updatedFavMeals };
            } else {
                const meal = state.meals.find(meal => meal.id === actions.mealId);
                return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
            }
        case FILTER_SETTING:
            const appliedFilters = actions.filters;

            const filterMeals = state.meals.filter(meal=>{
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                return true;

            })
            return {
                ...state,
                filteredMeals: filterMeals
            }
        default:
            return state;
    }
}

export default mealReducer;