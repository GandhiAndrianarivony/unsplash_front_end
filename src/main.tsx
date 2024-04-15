import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import router from "./router";
import "./index.css";

const env = import.meta.env;

// URI: Backend graphQL endpoint
const URI: string = `${env.VITE_BACKEND_PROTOCOL}://${env.VITE_BACKEND_IP_ADDRESS}:${env.VITE_BACKEND_PORT}${env.VITE_BACKEND_GQL_ENDPOINT}`;

const client = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <RouterProvider router={router} />
        </ApolloProvider>
    </React.StrictMode>
);
