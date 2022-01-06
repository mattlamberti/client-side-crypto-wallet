import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/temaNavigazione";
import NavigatoreAutenticazione from "./app/navigation/NavigatoreAutenticazione";

export default function App () {

    return (

        <NavigationContainer theme = {navigationTheme}>
            <NavigatoreAutenticazione />
        </NavigationContainer>

    );

}