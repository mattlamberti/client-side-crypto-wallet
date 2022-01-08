import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppText from "../components/AppText";

const Stack = createStackNavigator ();

const NavigatoreCrypto = () => (
  <Stack.Navigator mode = "modal" screenOptions = {{ headerShown: false }}>
    <Stack.Screen name = "Listings" component = {AppText} />
  </Stack.Navigator>
);

export default NavigatoreCrypto;