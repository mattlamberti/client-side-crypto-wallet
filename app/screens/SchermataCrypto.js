import React, { useState, useEffect } from "react";
import { Button, FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import apiWallet from "../api/wallet";
import authStorage from "../auth/storage";
import apiCrypto from "../api/crypto";
import colori from "../config/colori";
import IndicatoreAttivita from "../components/IndicatoreAttivita";
import { EliminaItemLista, Lista, SeparatoreItemLista } from "../components/liste";

function SchermataCrypto () {

    const [cryptos, setCryptos] = useState ([]);
    const [errore, setErrore] = useState (false);
    const [refreshing, setRefreshing] = useState (false);
    const [caricamento, setCaricamento] = useState (false);
    const [totale, setTotale] = useState ("$ ");

    useEffect (() => {

        caricaCrypto ();

    }, []);

    useEffect (() => {

        calcolaTotale ();

    });

    const calcolaTotale = () => {

        let totale_posseduto = 0;

        for (let i = 0; i < cryptos.length; i++) {

            totale_posseduto += parseFloat (cryptos [i].totale);

        }

        setTotale (totale_posseduto.toFixed (2));

    };

    const caricaCrypto = async () => {

        setCaricamento (true);

        try {

            const { _id } = await authStorage.leggiUtente ();
            const risposta = await apiWallet.leggiCrypto (_id);

            for (let i = 0; i < risposta.data.length; i++) {

                let dati = await apiCrypto.crypto (risposta.data [i]["simbolo"]);

                risposta.data [i]["prezzo"] = dati.data ["data"][Object.keys (dati.data ["data"])[0]]["quote"]["USD"]["price"];
                risposta.data [i]["id"] = dati.data ["data"][Object.keys (dati.data ["data"])[0]]["id"];
                risposta.data [i]["totale"] = ((risposta.data [i]["prezzo"] * risposta.data [i]["quantita"]) - (risposta.data [i]["prezzoPerUnita"] * risposta.data [i]["quantita"])).toFixed (2);

            }

            setCryptos (risposta.data);

        } catch (error) {

            alert ("Impossibile caricare le crypto.");
            
        } finally {

            setCaricamento (false);

        }

    };

    const eliminaCrypto = async (crypto) => {

        setCaricamento (true);

        try {

            const { _id } = await authStorage.leggiUtente ();
            await apiWallet.eliminaCrypto (_id, crypto.simbolo);

            setCryptos (cryptos.filter ((m) => m._id !== crypto._id));
            
        } catch (error) {

            alert ("Impossibile caricare le crypto.");
            
        } finally {

            setCaricamento (false);

        }

    };

    return (

        <Screen style = {styles.screen}>
            {errore && (
                <>
                    <AppText>Impossibile caricare le crypto.</AppText>
                    <Button title = "Riprova" onPress = {caricaCrypto} />
                </>
            )}
            <IndicatoreAttivita visibile = {caricamento} />
            <Lista stile = {styles.titolo} titolo = {"Totale:"} sottotitolo = {"$ " + totale} />
            <FlatList style = {styles.flatList} data = {cryptos} keyExtractor = {(crypto) => { crypto.simbolo }} renderItem = {({ item }) => (
                <Lista titolo = {item.nome} sottotitolo = {"$ " + item.totale} immagine = {"https://s2.coinmarketcap.com/static/img/coins/128x128/" + item.id + ".png"} onPress = {() => console.log ("Crypto selezionata", item)} swipeDestra = {() => (
                    <EliminaItemLista onPress={() => {eliminaCrypto (item);}} />
                )}
                />
            )} ItemSeparatorComponent = {SeparatoreItemLista} refreshing = {refreshing} onRefresh = {() => { caricaCrypto (); }} />
        </Screen>

    );

}

const styles = StyleSheet.create ({

    flatList: {

        marginTop: 20

    },
    screen: {

        flex: 1,
        backgroundColor: colori.light

    },
    titolo: {

        justifyContent: "center",
        fontWeight: "bold"

    }

});

export default SchermataCrypto;