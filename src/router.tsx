import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/PageNotFound.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import ViewProfilePage from "./pages/ViewProfilePage.tsx";

const router = createBrowserRouter([
    { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
    { path: "/signupPage", element: <RegisterPage /> },
    { path: "/loginPage", element: <LoginPage /> },
    { path: "/profile", element: <ViewProfilePage /> },
    // { path: "*", element: <ErrorPage /> },
]);

export default router;
