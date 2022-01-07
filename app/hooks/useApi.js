import { useState } from "react";

export default useApi = (apiFunc) => {

    const [dati, setDati] = useState ([]);
    const [errore, setErrore] = useState (false);
    const [caricamento, setCaricamento] = useState (false);

    const richiesta = async (...args) => {

        setCaricamento (true);
        const risposta = await apiFunc (...args);
        setCaricamento (false);

        setErrore (!risposta.ok);
        setDati (risposta.data);
        return risposta;

    };

    return { dati, errore, caricamento, richiesta };

};