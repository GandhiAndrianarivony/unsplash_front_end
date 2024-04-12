import App from "./App.tsx";
import Login from "./components/Login/Login.tsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/", element: <App /> },
]);

export default router;
