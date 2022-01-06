import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colori from "../config/colori";

function EliminaItemLista ({ onPress }) {

    return (

        <TouchableWithoutFeedback onPress = {onPress}>
            <View style = {styles.container}>
                <MaterialCommunityIcons name = "trash-can" size = {35} color = {colori.bianco} />
            </View>
        </TouchableWithoutFeedback>

    );

}

const styles = StyleSheet.create ({

    container: {

        backgroundColor: colori.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center"

    }

});

export default EliminaItemLista;