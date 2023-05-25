// Global CSS
import "./index.css";

// SignalR
// import * as signalR from "@microsoft/signalr";
import { connection } from "./Utils/connection.tsx";

// Root component, used to render the app
import { Root } from "./Pages/Root.tsx";

// Pages
import App from "./Pages/App.tsx";

// Events
connection.on("XXX", (isOnline: boolean, message: string) => {
    if (isOnline) {
        Root(<App message={message} />);
        console.log(message);
    } else {
        Root(<App message={message} />);
        console.log("(Cliente) .");
    }
});

Root(<App message="." />);
