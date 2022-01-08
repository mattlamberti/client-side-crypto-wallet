import { create } from "apisauce";

const crypto = async (parametro) => {

    const apiClient = create ({ baseURL: "https://pro-api.coinmarketcap.com", headers: { "X-CMC_PRO_API_KEY": "90778e3c-0fe6-40ff-a026-f3959a8bb81c" } });

    const risposta = await apiClient.get ("/v1/cryptocurrency/quotes/latest", { slug: parametro.toLowerCase () });

    return risposta;

};

export default { crypto };