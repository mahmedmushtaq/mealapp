import React from "react";
import {Text, TouchableOpacity, View,StyleSheet,Platform,TouchableNativeFeedback} from "react-native";

const CategoriesGridTile = (props)=>{

    let Touchable = TouchableOpacity;
    if(Platform.OS === "android" && Platform.Version >= 21){
        Touchable = TouchableNativeFeedback;
    }

    return(
        <View style={styles.gridItem}>
        <Touchable
            style={{flex:1}}
            onPress={props.onSelect}

        >
            <View   style={{...styles.container,...{backgroundColor:props.color}}}>
                <Text style={styles.title} numOfLines={2}>{props.title}</Text>
            </View>
        </Touchable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        height:150,
        flex:1,
        margin:15,
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        elevation:3,
        padding:15,
        justifyContent:"flex-end",
        alignItems:"flex-end",

    },
    title:{
        fontFamily:"open-sans-bold",
        fontSize:22,
        textAlign:"right",
        color:"white"

    }
})

export default CategoriesGridTile;