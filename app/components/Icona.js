import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icona ({ nome, dimensione = 40, backgroundColor = "#000", coloreIcona = "#fff" }) {

    return (

        <View style = {{ width: dimensione, height: dimensione, borderRadius: dimensione / 2, backgroundColor, justifyContent: "center", alignItems: "center" }}>
            <MaterialCommunityIcons name = {nome} color = {coloreIcona} size = {dimensione * 0.5} />
        </View>

    );

}

export default Icona;