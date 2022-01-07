import client from "./client";

const registrazione = (infoUtente) => client.post ("/utenti", infoUtente);

export default { registrazione };