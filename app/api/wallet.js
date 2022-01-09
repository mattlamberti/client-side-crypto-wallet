import { create } from "apisauce";

const apiClient = create ({ baseURL: "https://prova-progetto-psss.herokuapp.com/api" });

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