import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/PageNotFound.tsx";
import UploadImage from "./features/fileUpload/components/UploadImage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";

const authToken: String | null = localStorage.getItem("tokenAuth");

const router = createBrowserRouter([
    { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
    { path: "/upload_image", element: <UploadImage /> },
    { path: "/signupPage", element: <RegisterPage /> },
    {
        path: "/loginPage",
        element: !authToken ? <LoginPage /> : <Navigate to="/" />,
    },
]);

export default router;
