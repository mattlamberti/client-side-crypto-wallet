import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SchermataAccount from "../screens/SchermataAccount";
import NavigatoreCrypto from "./NavigatoreCrypto";
import SchermataAggiuntaCrypto from "../screens/SchermataAggiuntaCrypto";
import PulsanteAggiungiCrypto from "./PulsanteAggiungiCrypto";
import routes from "./routes";

const Tab = createBottomTabNavigator ();

const NavigatoreApp = () => (

    <Tab.Navigator>
        <Tab.Screen name = "Wallet" component = {NavigatoreCrypto} options = {{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name = "wallet" color = {color} size = {size} /> )}}
        />
        <Tab.Screen name = "Aggiungi crypto" component = {SchermataAggiuntaCrypto} options = {({ navigation }) => ({ tabBarButton: () => (
            <PulsanteAggiungiCrypto onPress = {() => navigation.navigate (routes.AGGIUNGI_CRYPTO)} /> ), tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name = "plus-circle" color = {color} size = {size} /> )})}
        />
        <Tab.Screen name = "Account" component = {SchermataAccount} options = {{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name = "account" color = {color} size = {size} /> )}}
        />
    </Tab.Navigator>

);

export default NavigatoreApp;