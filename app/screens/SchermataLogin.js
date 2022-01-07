import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";
import apiAccesso from "../api/accesso";
import { AppForm, AppFormField, MessaggioErrore, PulsanteSubmit } from "../components/forms";
import colori from "../config/colori";

const schemaValidazione = Yup.object ().shape ({

    email: Yup.string ().required ().email ().label ("Email"),
    password: Yup.string ().required ().min (4).label ("Password")

});

function SchermataLogin () {

    const auth = useAuth ();
    const [accessoFallito, setAccessoFallito] = useState (false);

    const gestisciSubmit = async ({ email, password }) => {

        const risultato = await apiAccesso.accesso (email, password);
        if (!risultato.ok) return setAccessoFallito (true);
        setAccessoFallito (false);
        auth.accedi (risultato.data);

    };

    return (

        <Screen style = {styles.container}>
            <Image style = {styles.logo} source = {require ("../assets/logo-bitcoin.png")} />
            <AppForm valoriIniziali = {{ email: "", password: "" }} onSubmit = {gestisciSubmit} schemaValidazione = {schemaValidazione}>
                <MessaggioErrore errore = "Email o password invalidi." visibile = {accessoFallito} />
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