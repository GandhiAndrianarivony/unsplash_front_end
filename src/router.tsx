import App from "./App.tsx";
import Login from "./components/Login/Login.tsx";
import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/PageNotFound/PageNotFound.tsx";
import LoginPage from "./pages/LoginPage.tsx";

const authToken: String | null = localStorage.getItem("tokenAuth");
console.log(authToken);

const router = createBrowserRouter([
    { path: "/", element: <App />, errorElement: <ErrorPage /> },
    { path: "/login", element: !authToken ? <Login /> : <Navigate to="/"/> },
    { path: "/loginPage", element: <LoginPage/>}
]);

export default router;
