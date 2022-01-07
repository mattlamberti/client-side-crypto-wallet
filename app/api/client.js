import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create ({

    baseURL: "https://prova-progetto-psss.herokuapp.com/api"

});

apiClient.addAsyncRequestTransform (async (request) => {

    const authToken = await authStorage.leggiToken ();
    if (!authToken) return;
    request.headers ["x-auth-token"] = authToken;

});

const get = apiClient.get;

apiClient.get = async (url, parametri, axiosConfig) => {

    const risposta = await get (url, parametri, axiosConfig);

    if (risposta.ok) {

        cache.salva (url, risposta.data);
        return risposta;

    }

    const dati = await cache.leggi (url);
    return dati ? { ok: true, dati } : risposta;

};

export default apiClient;