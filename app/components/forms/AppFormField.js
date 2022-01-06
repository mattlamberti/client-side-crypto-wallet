import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import MessaggioErrore from "./MessaggioErrore";

function AppFormField ({ nome, ...altreProps }) {

    const { setFieldTouched, handleChange, errors, touched } = useFormikContext ();

    return (

        <>
            <AppTextInput onBlur = {() => setFieldTouched (nome)} onChangeText = {handleChange (nome)} {...altreProps} />
            <MessaggioErrore errore = {errors [nome]} visibile = {touched [nome]} />
        </>

    );

}

export default AppFormField;