import client from "./client";

const aggiungiCrypto = async (body, onUploadProgress) => {

    return client.post ("/wallets", body, {
        onUploadProgress: (progress) => onUploadProgress (progress.loaded / progress.total)
    });

};

export default { aggiungiCrypto };