import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, PulsanteSubmit } from "../components/forms";
import colori from "../config/colori";

const schemaValidazione = Yup.object ().shape ({

    email: Yup.string ().required ().email ().label ("Email"),
    password: Yup.string ().required ().min (4).label ("Password")

});

function SchermataLogin () {

    return (

        <Screen style = {styles.container}>
            <Image style = {styles.logo} source = {require ("../assets/logo-bitcoin.png")} />
            <AppForm valoriIniziali = {{ email: "", password: "" }} onSubmit = {(valori) => console.log (valori)} schemaValidazione = {schemaValidazione}>
                <AppFormField autoCapitalize = "none" autoCorrect = {false} icona = "email" nome = "email" placeholder = "Email" textContentType = "emailAddress" keyboardType = "email-address" />
                <AppFormField autoCapitalize = "none" autoCorrect = {false} icona = "lock" nome = "password" placeholder = "Password" textContentType = "password" secureTextEntry />
                <PulsanteSubmit titolo = "Accedi" />
            </AppForm>
        </Screen>

    );

}

const styles = StyleSheet.create ({

    container: {

        backgroundColor: colori.bianco,
        padding: 10

    },
    logo: {

        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20

    }

});

export default SchermataLogin;