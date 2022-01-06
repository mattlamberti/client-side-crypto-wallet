import { Platform } from "react-native";

import colori from "./colori";

export default {

    colori,
    text: {

        color: colori.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"

    }

};