//SignalR
import {
    HubConnection,
    HubConnectionBuilder,
    HubConnectionState,
} from "@microsoft/signalr";

// React
import ReactDOM from "react-dom/client";

import "./index.css";

//PAGES
import App from "./Pages/App";

const connection = new HubConnectionBuilder()
    .withUrl("http://localhost:5001/hub")
    .withAutomaticReconnect()
    .build();

connection
    .start()
    .then(() => {
        console.log("(SignalR)[Cliente] Conectado.");
    })
    .catch((error) => {
        console.log("(SignalR)[Cliente] Erro na conexão. Erro: " + error);
    });

// Root
const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

const render = (root: ReactDOM.Root, connection: HubConnection) => {
    switch (connection.state) {
        case HubConnectionState.Connected:
            root.render(<App connection={connection} />);
            break;
        case HubConnectionState.Disconnected:
            root.render(
                <div className="bg-black text-white">Desconectado</div>
            );
            break;
        case HubConnectionState.Connecting:
            root.render(
                <div className="bg-black text-white">Conectando...</div>
            );
            setInterval(() => {
                render(root, connection);
            }, 1000);
            break;
        case HubConnectionState.Reconnecting:
            root.render(
                <div className="bg-black text-white">Reconectando...</div>
            );
            break;
        default:
            break;
    }
};

render(root, connection);
