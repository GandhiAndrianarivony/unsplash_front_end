import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/",
    // preview: { port: 8080, strictPort: true },
    server: {
        port: Number(process.env.FRONTEND_PORT),
        // strictPort: true,
        host: "0.0.0.0",
        // origin: "http://0.0.0.0:8080",
    },
});
