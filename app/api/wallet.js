import { create } from "apisauce";
import authStorage from "../auth/storage";

const apiClient = create ({ baseURL: "https://prova-progetto-psss.herokuapp.com/api" });

apiClient.addAsyncRequestTransform (async (request) => {

    const authToken = await authStorage.leggiToken ();
    if (!authToken) return;
    request.headers ["x-auth-token"] = authToken;

});

const aggiungiCrypto = async (body, onUploadProgress) => {

    return apiClient.post ("/wallets", body, {
        onUploadProgress: (progress) => onUploadProgress (progress.loaded / progress.total)
    });

};

const leggiCrypto = async (id) => {

    return apiClient.get ("/wallets/" + id);

};

const eliminaCrypto = async (id, crypto) => {

    return apiClient.delete ("/wallets/" + id + "/" + crypto);

};

export default { aggiungiCrypto, leggiCrypto, eliminaCrypto };