import App from "./App.tsx";
import Login from "./components/Login/Login.tsx";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/PageNotFound/PageNotFound.tsx";

const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/", element: <App />, errorElement: <ErrorPage /> },
]);

export default router;
