import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SchermataCrypto from "../screens/SchermataCrypto";

const Stack = createStackNavigator ();

const NavigatoreCrypto = () => (

    <Stack.Navigator presentation = "modal" screenOptions = {{ headerShown: false }}>
        <Stack.Screen name = "Cryptos" component = {SchermataCrypto} />
    </Stack.Navigator>

);

export default NavigatoreCrypto;