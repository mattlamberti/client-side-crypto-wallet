import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const chiave = "authToken";

const salvaToken = async (authToken) => {

    try {

        await SecureStore.setItemAsync (chiave, authToken);

    } catch (error) {

        console.log ("Errore nel salvataggio dell'AuthToken", error);

    }

};

const leggiToken = async () => {

    try {

        return await SecureStore.getItemAsync (chiave);

    } catch (error) {

        console.log ("Errore nella lettura dell'AuthToken", error);

    }

};

const leggiUtente = async () => {

    const token = await leggiToken ();
    return token ? jwtDecode (token) : null;

};

const cancellaToken = async () => {

    try {

        await SecureStore.deleteItemAsync (chiave);

    } catch (error) {

        console.log ("Errore nella cancellazione dell'AuthToken", error);

    }

};

export default { leggiUtente, leggiToken, salvaToken, cancellaToken };