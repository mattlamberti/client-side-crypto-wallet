import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, PulsanteSubmit } from "../components/forms";
import Screen from "../components/Screen";

const schemaValidazione = Yup.object ().shape ({

    crypto: Yup.string ().required ().min (1).label ("Crypto"),
    prezzo: Yup.number ().required ().min (1).max (1000000).label ("Prezzo per unità"),
    quantita: Yup.number ().required ().min (1).max (1000000000000).label ("Quantità")

});

function SchermataAggiuntaCrypto () {

    return (

        <Screen style = {styles.container}>
            <AppForm valoriIniziali = {{ crypto: "", prezzo: "", quantita: "" }} onSubmit = {() => console.log ("Aggiunta Crypto")} validationSchema = {schemaValidazione}>
                <AppFormField maxLength = {255} icona = "bitcoin" nome = "crypto" placeholder = "Crypto" />
                <AppFormField keyboardType = "numeric" maxLength = {7} icona = "cash" nome = "prezzo" placeholder = "Prezzo per unità" />
                <AppFormField keyboardType = "numeric" maxLength = {13} icona = "plus" nome = "quantita" placeholder = "Quantità" width = {170} />
                <PulsanteSubmit titolo = "Aggiungi crypto" />
            </AppForm>
        </Screen>

    );

}

const styles = StyleSheet.create ({

    container: {

        padding: 10

    }

});

export default SchermataAggiuntaCrypto;