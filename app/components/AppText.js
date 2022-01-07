import React from "react";
import { Text } from "react-native";

import stiliDefault from "../config/stili";

function AppText ({ children, style, ...altreProps }) {

    return <Text style = {[stiliDefault.text, style]} {...altreProps}>{children}</Text>;

}

export default AppText;