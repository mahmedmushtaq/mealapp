import React from "react";
import {StyleSheet,Platform} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {HeaderButton} from "react-navigation-header-buttons";
import colors from "../constants/colors";

const CustomButton = props=>{

    return(
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconsize={props.iconSize || 2} color={Platform.OS === 'android' ? 'white':colors.primaryColor}
        />
    )
}

export default CustomButton;

