import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/PageNotFound.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import ModalComponent from "./features/fileUpload/components/ModalComponent.tsx";

const router = createBrowserRouter([
    { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
    { path: "/signupPage", element: <RegisterPage /> },
    { path: "/loginPage", element: <LoginPage /> },
    { path: "/modalComponent", element: <ModalComponent /> },
]);

export default router;
