import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colori from "../config/colori";

function AppButton ({ title, onPress, color = "primario" }) {

    return (

        <TouchableOpacity style = {[styles.button, { backgroundColor: colori [color] }]} onPress = {onPress}>
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>

    );

}

const styles = StyleSheet.create ({

    button: {

        backgroundColor: colori.primario,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10

    },
    text: {

        color: colori.bianco,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"

    }

});

export default AppButton;
