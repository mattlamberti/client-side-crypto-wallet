import client from "./client";

const accesso = (email, password) => client.post ("/autenticazione", { email, password });

export default { accesso };