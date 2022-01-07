import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

function SchermataBenvenuto ({ navigation }) {

    return (

        <ImageBackground blurRadius = {7} style = {styles.background} source = {require ("../assets/background.jpg")}>
            <View style = {styles.logoContainer}>
                <Image style = {styles.logo} source = {require ("../assets/logo-bitcoin.png")} />
                <Text style = {styles.tagline}>CryptoWallet</Text>
            </View>
            <View style = {styles.buttonsContainer}>
                <AppButton titolo = "Accedi" onPress = {() => navigation.navigate (routes.ACCEDI)} />
                <AppButton titolo = "Registrati" color = "nero" onPress = {() => navigation.navigate (routes.REGISTRATI)} />
            </View>
        </ImageBackground>
  );
}

const styles = StyleSheet.create ({

    background: {

        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"

    },
    buttonsContainer: {

        padding: 20,
        width: "100%"

    },
    logo: {

        width: 100,
        height: 100

    },
    logoContainer: {

        position: "absolute",
        top: 70,
        alignItems: "center"

    },
    tagline: {

        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20

    }

});

export default SchermataBenvenuto;