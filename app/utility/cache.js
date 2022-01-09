import { AsyncStorage } from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefisso = "cache";
const scadenzaInMinuti = 5;

const salva = async (chiave, valore) => {

    try {

        const item = {

            valore,
            timestamp: Date.now ()

        };

        await AsyncStorage.setItem (prefisso + chiave, JSON.stringify (item));

    } catch (error) {

        console.log (error);

    }

};

const scaduto = (item) => {

    const ora = moment (Date.now ());
    const timeStampSalvato = moment (item.timestamp);
    return ora.diff (timeStampSalvato, "minutes") > scadenzaInMinuti;

};

const leggi = async (chiave) => {

    try {

        const valore = await AsyncStorage.getItem (prefisso + chiave);
        const item = JSON.parse (valore);

        if (!item) return null;

        if (scaduto (item)) {

            await AsyncStorage.removeItem (prefisso + chiave);
            return null;

        }

        return item.valore;

    } catch (error) {

        console.log ("ERRORE: " + error);

    }

};

export default {

    salva,
    leggi

};