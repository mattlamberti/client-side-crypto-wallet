import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../AppText";

function MessaggioErrore ({ errore, visibile }) {

    if (!visibile || !errore) return null;

    return <AppText style = {styles.errore}>{errore}</AppText>;

}

const styles = StyleSheet.create ({

  errore: { color: "red" }

});

export default MessaggioErrore;