import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import temaNavigazione from "./app/navigation/temaNavigazione";
import NavigatoreAutenticazione from "./app/navigation/NavigatoreAutenticazione";
import NavigatoreApp from "./app/navigation/NavigatoreApp";
import SupportoOffline from "./app/components/SupportoOffline";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App () {

    const [utente, setUtente] = useState ();
    const [pronto, setPronto] = useState (false);
  
    const ripristinaUtente = async () => {

        const utente = await authStorage.leggiUtente ();

        if (utente) setUtente (utente);

    };

    if (!pronto) return (<AppLoading startAsync = {ripristinaUtente} onError = {(error) => console.log (error)} onFinish = {() => setPronto (true)} />);

    return (

        <AuthContext.Provider value = {{ utente, setUtente }}>
            <SupportoOffline />
            <NavigationContainer theme = {temaNavigazione}>
                {utente ? <NavigatoreApp /> : <NavigatoreAutenticazione />}
            </NavigationContainer>
        </AuthContext.Provider>

    );

}