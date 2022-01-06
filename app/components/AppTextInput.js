import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import stiliDefault from "../config/stili";

function AppTextInput ({ icona, ...altreProps }) {

    return (

        <View style = {styles.container}>
            {icona && (<MaterialCommunityIcons name = {icona} size = {20} color = {stiliDefault.colori.medium} style = {styles.icona} />)}
            <TextInput placeholderTextColor = {stiliDefault.colori.medium} style = {stiliDefault.text} {...altreProps} />
        </View>

    );

}

const styles = StyleSheet.create ({

    container: {

        backgroundColor: stiliDefault.colori.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10

    },
    icona: {

        marginRight: 10,
        alignSelf: "center"

    }

});

export default AppTextInput;