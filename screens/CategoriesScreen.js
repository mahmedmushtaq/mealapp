import React from "react";
import {StyleSheet,View,Text,Platform,FlatList,TouchableOpacity} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import colors from "../constants/colors";
import CategoriesGridTile from "../components/CategoriesGridTile";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomButton from "../components/CustomHeaderButton";



const CategoriesMeal = props=>{

    const renderList = (itemData)=>(

        <CategoriesGridTile
            onSelect={()=>{props.navigation.navigate({routeName:"CategoryMeals",params:{
                    categoryId:itemData.item.id,
                }})}}

            title={itemData.item.title}
            color={itemData.item.color}
        />

    )

    return(
        <FlatList data={CATEGORIES} numColumns={2} renderItem={renderList}/>
    )
};




const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },

});

CategoriesMeal.navigationOptions = navData=>{
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

export default CategoriesMeal;