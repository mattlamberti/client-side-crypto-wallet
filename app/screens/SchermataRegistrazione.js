import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import acc from "../api/accesso";
import reg from "../api/registrazione";
import { AppForm, AppFormField, MessaggioErrore, PulsanteSubmit } from "../components/forms";
import IndicatoreAttivita from "../components/IndicatoreAttivita";
import colori from "../config/colori";

const schemaValidazione = Yup.object ().shape ({

    nome: Yup.string ().required ().label ("Nome"),
    email: Yup.string ().required ().email ().label ("Email"),
    password: Yup.string ().required ().min (4).label ("Password")

});

function SchermataRegistrazione () {

    const apiRegistrazione = useApi (reg.registrazione);
    const apiAccesso = useApi (acc.accesso);
    const auth = useAuth ();
    const [errore, setErrore] = useState ();

    const gestisciSubmit = async (infoUtente) => {

        const risultato = await apiRegistrazione.richiesta (infoUtente);

        if (!risultato.ok) {

            if (risultato.data) {

                setErrore (risultato.data);

            } else {

                setErrore ("C'è stato un errore.");
                console.log (risultato);

            }

            return;

        }

        const { data: authToken } = await apiAccesso.richiesta (infoUtente.email, infoUtente.password);

        auth.accedi (authToken);

    };

    return (

        <>
            <IndicatoreAttivita visibile = {apiRegistrazione.caricamento || apiAccesso.caricamento} />
            <Screen style = {styles.container}>
            <AppForm valoriIniziali = {{ nome: "", email: "", password: "" }} onSubmit = {gestisciSubmit} schemaValidazione = {schemaValidazione}>
                <MessaggioErrore errore = {errore} visibile = {errore} />
                <AppFormField autoCorrect = {false} icona = "account" nome = "nome" placeholder = "Nome" />
                <AppFormField autoCapitalize = "none" autoCorrect = {false} icona = "email" nome = "email" placeholder = "Email" textContentType = "emailAddress" keyboardType = "email-address" />
                <AppFormField autoCapitalize = "none" autoCorrect = {false} icona = "lock" nome = "password" placeholder = "Password" textContentType = "password" secureTextEntry />
                <PulsanteSubmit titolo = "Registrati" />
            </AppForm>
            </Screen>
        </>

    );

}

const styles = StyleSheet.create ({

    container: {

        backgroundColor: colori.bianco,
        padding: 10

    }

});

export default SchermataRegistrazione;