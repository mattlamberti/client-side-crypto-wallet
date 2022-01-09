import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {

    const { utente, setUtente } = useContext (AuthContext);

    const accedi = (authToken) => {

        const utente = jwtDecode (authToken);

        setUtente (utente);
        authStorage.salvaToken (authToken);

    };

    const esci = () => {

        setUtente (null);
        authStorage.cancellaToken ();

    };

    return { utente, accedi, esci };

};