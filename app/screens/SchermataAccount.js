import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Lista from "../components/liste/Lista";
import colori from "../config/colori";
import Icona from "../components/Icona";
import useAuth from "../auth/useAuth";

function SchermataAccount () {

    const { utente, esci } = useAuth ();

    return (

        <Screen style = {styles.screen}>
            <View style = {styles.container}>
                <Lista titolo = {utente.nome} sottotitolo = {utente.email} immagine = {"http://www.mito.unina.it/wp-content/uploads/2014/05/logo-UNINA.png"} />
            </View>
            <Lista titolo = "Esci" onPress = {() => esci ()} ComponenteIcona = {<Icona nome = "logout" backgroundColor = "#ffe66d" />} />
        </Screen>

    );

}

const styles = StyleSheet.create ({

    screen: {

        backgroundColor: colori.light

    },
    container: {

        marginTop: 0,
        marginVertical: 20

    }

});

export default SchermataAccount;