import * as signalR from "@microsoft/signalr";

// SIGNALR
export const connection = new signalR.HubConnectionBuilder()
    .withUrl("/hub")
    .withAutomaticReconnect()
    .build();

// Inicia a conexão
connection
    .start()
    .then(() => {
        console.log("(Client)[ONLINE] Conexão estabelecida.");
    })
    .catch((err: Error) => console.error(err.toString()));

//Muda o status caso a conexão caia
connection.onclose(() => {
    console.log("(Client)[OFFLINE] Conexão perdida.");
});

connection.on("ONLINE", (message: string) => {
    console.log(message);
});

connection.on("OFFLINE", (message: string) => {
    console.log(message);
});
