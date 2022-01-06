import React from "react";
import { Formik } from "formik";

function AppForm ({ valoriIniziali, onSubmit, schemaValidazione, children }) {

    return (

        <Formik initialValues = {valoriIniziali} onSubmit = {onSubmit} validationSchema = {schemaValidazione}>
            {() => <>{children}</>}
        </Formik>

    );

}

export default AppForm;