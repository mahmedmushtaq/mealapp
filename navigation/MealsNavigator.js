import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeal from "../screens/CategoryMealScreen";
import MealScreen from "../screens/MealScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import FavouriteScreen from "../screens/FavouriteScreen";
import FilterScreen from "../screens/FilterScreen";
import {Platform} from "react-native";
import colors from "../constants/colors";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {createDrawerNavigator} from "react-navigation-drawer";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";


const defaultNavigation =  {
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : "",

    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
}

const mealsNavigator = createStackNavigator({
   Categories:{
       screen:CategoriesScreen,
       navigationOptions:{
           headerTitle:"Meal Categories"
       }
   },
   CategoryMeals:{
       screen:CategoryMeal
   },
   MealDetail:{
       screen:MealScreen
   }

},{
    defaultNavigationOptions:{
        ...defaultNavigation,

    }
});

const FavouriteStack = createStackNavigator({
    Favourite:{
        screen:FavouriteScreen,
        navigationOptions:{
            headerTitle:"My Favourites",

        }
    },
    Meal:MealScreen,
},{
    defaultNavigationOptions:defaultNavigation
})

const tabScreenConfig = (
    {
        Meals:{screen:mealsNavigator,navigationOptions:{
                tabBarIcon:(tabInfo)=>{
                    return <Ionicons name={"ios-restaurant"} size={25} color={tabInfo.tintColor}/>
                },
                tabBarColor:colors.primaryColor
            }},
        FavouriteScreen:{
             screen:FavouriteStack,navigationOptions:{
                tabBarLabel:"Favourites",
                tabBarIcon:(tabInfo)=>{
                    return <Ionicons name={"ios-star"} size={25} color={tabInfo.tintColor}/>
                },
                tabBarColor: colors.accentColor,
            }},
    }
)

const bottomTabNavigation = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig,{
        activeColor:colors.white,
        shifting:true
    })
    : createBottomTabNavigator(tabScreenConfig,{
    tabBarOptions:{
        activeTintColor:colors.accentColor
    }
})
const FilterNavigator = createStackNavigator({
    Filter:FilterScreen,

},{
    defaultNavigationOptions:defaultNavigation
})

const drawerNavigator = createDrawerNavigator({
    mealsFav: {
        screen:bottomTabNavigation,
        navigationOptions:{
            drawerLabel:"Meals"
        }
    },
    filter: FilterNavigator
},{
    contentOptions:{
        activeTintColor:colors.accentColor,
        labelStyle:{
            fontFamily:"open-sans-bold"
        }
    }
})

export default createAppContainer(drawerNavigator);