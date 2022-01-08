import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colori from "../config/colori";

function PulsanteAggiungiCrypto ({ onPress }) {

    return (

        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.container}>
                <MaterialCommunityIcons name = "plus-circle" color = {colori.bianco} size = {40} />
            </View>
        </TouchableOpacity>

    );

}

const styles = StyleSheet.create ({

    container: {

        alignItems: "center",
        backgroundColor: colori.primario,
        borderColor: colori.bianco,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 20,
        height: 70,
        justifyContent: "center",
        width: 70

    }

});

export default PulsanteAggiungiCrypto;