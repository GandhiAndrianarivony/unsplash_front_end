import App from "./App.tsx";
import Login from "./components/Login/Login.tsx";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/PageNotFound/PageNotFound.tsx";

const authToken: String | null = localStorage.getItem("tokenAuth");
console.log(authToken);

const router = createBrowserRouter([
    { path: "/", element: <App />, errorElement: <ErrorPage /> },
    { path: "/login", element: !authToken ? <Login /> : <App /> },
]);

export default router;
