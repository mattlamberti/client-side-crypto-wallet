import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SchermataAggiuntaCrypto from "../screens/SchermataAggiuntaCrypto";

const Stack = createStackNavigator ();

const NavigatoreApp = () => (

    <Stack.Navigator>
        <Stack.Screen name = "Aggiungi Crypto" component = {SchermataAggiuntaCrypto} options = {{ headerShown: false }} />
    </Stack.Navigator>

);

export default NavigatoreApp;