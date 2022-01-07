import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Lista from "../components/liste/Lista";
import SeparatoreItemLista from "../components/liste/SeparatoreItemLista";
import colori from "../config/colori";
import Icona from "../components/Icona";
import useAuth from "../auth/useAuth";

const menuItems = [

    {

        titolo: "Crypto",
        icona: {

            nome: "format-list-bulleted",
            backgroundColor: colori.primario

        }

    },
    {

        titolo: "Notifiche",
        icona: {

            nome: "email",
            backgroundColor: colori.nero

        }
    }

];

function SchermataAccount () {

    const { utente, esci } = useAuth ();

    return (

        <Screen style = {styles.screen}>
            <View style = {styles.container}>
                <Lista titolo = {utente.nome} sottotitolo = {utente.email} immagine = {require ("../assets/immagine.jpg")} />
            </View>
            <View style = {styles.container}>
                <FlatList data = {menuItems} keyExtractor = {(menuItem) => menuItem.titolo} ItemSeparatorComponent = {SeparatoreItemLista} renderItem = {({ item }) => (
                    <Lista titolo = {item.titolo} ComponenteIcona = {<Icona nome = {item.icona.nome} backgroundColor = {item.icona.backgroundColor} />} />
                )} />
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

        marginVertical: 20

    }

});

export default SchermataAccount;