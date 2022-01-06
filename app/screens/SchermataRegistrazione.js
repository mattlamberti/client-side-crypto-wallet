import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, PulsanteSubmit } from "../components/forms";

const schemaValidazione = Yup.object ().shape ({

    nome: Yup.string ().required ().label ("Nome"),
    email: Yup.string ().required ().email ().label ("Email"),
    password: Yup.string ().required ().min (4).label ("Password")

});

function SchermataRegistrazione () {

    return (

        <Screen style = {styles.container}>
            <AppForm valoriIniziali = {{ nome: "", email: "", password: "" }} onSubmit = {(valori) => console.log (valori)} schemaValidazione = {schemaValidazione}>
                <AppFormField autoCorrect = {false} icona = "account" nome = "nome" placeholder = "Nome" />
                <AppFormField autoCapitalize = "none" autoCorrect = {false} icona = "email" nome = "email" placeholder = "Email" textContentType = "emailAddress" keyboardType = "email-address" />
                <AppFormField autoCapitalize = "none" autoCorrect = {false} icona = "lock" nome = "password" placeholder = "Password" textContentType = "password" secureTextEntry />
                <PulsanteSubmit titolo = "Registrati" />
            </AppForm>
        </Screen>

    );

}

const styles = StyleSheet.create ({

    container: {

        padding: 10

    }

});

export default SchermataRegistrazione;