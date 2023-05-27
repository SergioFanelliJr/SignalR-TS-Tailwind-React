import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3001,
        proxy: {
            "/hub": "http://localhost:5001", // aponte para o endereço do seu servidor SignalR
        },
    },
    plugins: [react()],
});
