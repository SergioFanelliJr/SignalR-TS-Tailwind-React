// React
import { useEffect, useRef, useState } from "react";

import { HubConnection } from "@microsoft/signalr";

export interface IDashboardProps {
    connection: HubConnection;
}

export default function Dashboard(props: IDashboardProps) {
    const [message, setMessage] = useState<string>("");
    const connection = useRef(props.connection);

    const testServer = () => {
        props.connection.invoke("Teste", "(Cliente) - Conexão estabelecida.");
    };

    useEffect(() => {
        connection.current.on("Teste", (message: string) => {
            setMessage(message);
            console.log(message);
        });
    }, []);

    return (
        <section className="h-screen flex">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transform transition duration-300 hover:scale-105"
                onClick={testServer}
            >
                Click me!
            </button>
            <p className="text-white">{message}</p>
        </section>
    );
}
