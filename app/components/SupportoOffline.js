import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "./AppText";
import colori from "../config/colori";

function SupportoOffline () {

    const netInfo = useNetInfo ();

    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {

        return (

            <View style = {styles.container}>
                <AppText style = {styles.testo}>Nessuna connessione internet</AppText>
            </View>

        );

    }
    

    return null;

}

const styles = StyleSheet.create ({

    container: {

        alignItems: "center",
        backgroundColor: colori.primario,
        height: 50,
        justifyContent: "center",
        position: "absolute",
        top: Constants.statusBarHeight,
        width: "100%",
        zIndex: 1

    },
    testo: {

        color: colori.bianco

    }

});

export default SupportoOffline;