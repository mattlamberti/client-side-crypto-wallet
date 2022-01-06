import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colori from "../config/colori";

function Lista ({ titolo, sottotitolo, immagine, ComponenteIcona, onPress, swipeDestra }) {

    return (

        <Swipeable renderRightActions = {swipeDestra}>
            <TouchableHighlight underlayColor = {colori.light} onPress = {onPress}>
                <View style = {styles.container}>
                    {ComponenteIcona}
                    {immagine && <Image style = {styles.immagine} source = {immagine} />}
                    <View style = {styles.dettagliContainer}>
                        <AppText style = {styles.titolo}>{titolo}</AppText>
                        {sottotitolo && <AppText style = {styles.sottotitolo}>{sottotitolo}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>

    );

}

const styles = StyleSheet.create ({

    container: {

        flexDirection: "row",
        padding: 15,
        backgroundColor: colori.bianco

    },
    dettagliContainer: {

        marginLeft: 10,
        justifyContent: "center"

    },
    immagine: {

        width: 70,
        height: 70,
        borderRadius: 35

    },
    sottotitolo: {

        color: colori.soft

    },
    titolo: {

        fontWeight: "500"

    }

});

export default Lista;