import React from 'react';

import MealList from '../components/MealList';

import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomButton from "../components/CustomHeaderButton";
import {useSelector} from "react-redux";


const FavoritesScreen = props => {
    // const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    const favMeals = useSelector(store=>store.meals.favouriteMeals);
    console.log(favMeals);
    return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
};

FavoritesScreen.navigationOptions = navData=>{
    return{
        headerLeft:()=>(
            <HeaderButtons HeaderButtonComponent={CustomButton}>
                <Item iconSize={25} title={"Menu"} iconName={"ios-menu"} onPress={()=>{
                    navData.navigation.toggleDrawer();
                }}/>
            </HeaderButtons>
        )
    }
}

export default FavoritesScreen;