export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const FILTER_SETTING = "FILTER_SETTING";

export const toggleFavouriteDispatch = (id)=>{

    return{
        type:TOGGLE_FAVOURITE,
        mealId:id,
    }
};

export const setFilters = filters =>{

    return{
        type:FILTER_SETTING,
        filters
    }
}