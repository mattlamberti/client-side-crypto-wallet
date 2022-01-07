import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SchermataAccount from "../screens/SchermataAccount";

const Stack = createStackNavigator ();

const NavigatoreApp = () => (

    <Stack.Navigator>
        <Stack.Screen name = "Account" component = {SchermataAccount} options = {{ headerShown: false }} />
    </Stack.Navigator>

);

export default NavigatoreApp;