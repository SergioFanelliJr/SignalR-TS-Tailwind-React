import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { SignalRContext } from "../Utils/context.tsx";
import { connection } from "../Utils/connection.tsx";

// Root component, used to render the app
export function Root(children: ReactNode) {
    const rootElement = document.getElementById("root") as HTMLElement;
    const root = ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <SignalRContext.Provider value={connection}>
                {children}
            </SignalRContext.Provider>
        </React.StrictMode>
    );
    return root;
}
