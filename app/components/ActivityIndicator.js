import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function IndicatoreAttivita ({ visibile = false }) {

    if (!visibile) return null;

    return (
  
        <View style = {styles.copertura}>
            <LottieView autoPlay loop source = {require ("../assets/animations/loader.json")} />
        </View>

    );

}

const styles = StyleSheet.create ({

    copertura: {

        position: "absolute",
        backgroundColor: "white",
        height: "100%",
        opacity: 0.8,
        width: "100%",
        zIndex: 1

    }

});

export default IndicatoreAttivita;