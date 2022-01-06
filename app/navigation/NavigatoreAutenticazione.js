import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SchermataBenvenuto from "../screens/SchermataBenvenuto";
import SchermataLogin from "../screens/SchermataLogin";
import SchermataRegistrazione from "../screens/SchermataRegistrazione";

const Stack = createStackNavigator ();

const NavigatoreAutenticazione = () => (

    <Stack.Navigator>
        <Stack.Screen name = "Benvenuto" component = {SchermataBenvenuto} options = {{ headerShown: false }} />
        <Stack.Screen name = "Accedi" component = {SchermataLogin} />
        <Stack.Screen name = "Registrati" component = {SchermataRegistrazione} />
    </Stack.Navigator>

);

export default NavigatoreAutenticazione;