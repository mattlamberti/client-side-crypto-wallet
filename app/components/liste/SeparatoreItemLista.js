import React from "react";
import { StyleSheet, View } from "react-native";

import colori from "../../config/colori";

function SeparatoreItemLista () {

    return <View style = {styles.separatore} />;

}

const styles = StyleSheet.create ({

    separatore: {

        width: "100%",
        height: 1,
        backgroundColor: colori.light

    }

});

export default SeparatoreItemLista;