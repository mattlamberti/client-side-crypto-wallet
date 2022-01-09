import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import MessaggioErrore from "./MessaggioErrore";

function AppFormField ({ nome, ...altreProps }) {

    const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext ();

    return (

        <>
            <AppTextInput onBlur = {() => setFieldTouched (nome)} onChangeText = {(text) => setFieldValue (nome, text)} value = {values [nome]} {...altreProps} />
            <MessaggioErrore errore = {errors [nome]} visibile = {touched [nome]} />
        </>

    );

}

export default AppFormField;