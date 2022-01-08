import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import apiCrypto from "../api/crypto";
import apiWallet from "../api/wallet";
import authStorage from "../auth/storage";
import { AppForm, AppFormField, MessaggioErrore, PulsanteSubmit } from "../components/forms";
import Screen from "../components/Screen";
import SchermataUploadCrypto from "./SchermataUploadCrypto";

const schemaValidazione = Yup.object ().shape ({

    crypto: Yup.string ().required ().min (1).label ("Crypto"),
    prezzo: Yup.number ().required ().min (1).max (1000000).label ("Prezzo per unità"),
    quantita: Yup.number ().required ().min (1).max (1000000000000).label ("Quantità")

});

function SchermataAggiuntaCrypto () {

    const [uploadVisibile, setUploadVisibile] = useState (false);
    const [progresso, setProgresso] = useState (0);
    const [errore, setErrore] = useState (false);

    const gestisciSubmit = async ({ crypto, quantita, prezzo }, { resetForm }) => {

        setProgresso (0);
        setUploadVisibile (true);

        const risposta = await apiCrypto.crypto (crypto);

        if (!risposta.ok) {

            setErrore (true);

        } else {

            setErrore (false);

            const { _id } = await authStorage.leggiUtente ();

            let body = {

                utente: _id,
                nome: risposta.data ["data"][Object.keys (risposta.data ["data"])[0]]["name"],
                simbolo: risposta.data ["data"][Object.keys (risposta.data ["data"])[0]]["symbol"],
                quantita,
                prezzoPerUnita: prezzo

            }

            const risultato = await apiWallet.aggiungiCrypto (body, (progresso) => setProgresso (progresso));

            console.log (risultato);

            if (!risultato.ok) {

                setUploadVisibile (false);
                return alert ("Impossibile aggiungere la crypto al wallet.");

            }
            
            resetForm ();

        }

    };

    return (

        <Screen style = {styles.container}>
            <SchermataUploadCrypto gestisciFineAnimazione = {() => setUploadVisibile (false)} progresso = {progresso} visibile = {uploadVisibile} />
            <AppForm valoriIniziali = {{ crypto: "", prezzo: "", quantita: "" }} onSubmit = {gestisciSubmit} validationSchema = {schemaValidazione}>
                <MessaggioErrore errore = "Crypto non trovata. Riprova." visibile = {errore} />
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