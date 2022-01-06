import { DefaultTheme } from "@react-navigation/native";
import colori from "../config/colori";

export default {

    ...DefaultTheme,
    colors: {

        ...DefaultTheme.colors,
        primary: colori.primario,
        background: colori.bianco        

    }

};