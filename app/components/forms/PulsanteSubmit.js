import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function PulsanteSubmit ({ titolo }) {

    const { handleSubmit } = useFormikContext ();

    return <AppButton titolo = {titolo} onPress = {handleSubmit} />;

}

export default PulsanteSubmit;