import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/PageNotFound.tsx";
import UploadImage from "./features/fileUpload/components/UploadImage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";

const router = createBrowserRouter([
    { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
    { path: "/upload_image", element: <UploadImage /> },
    { path: "/signupPage", element: <RegisterPage /> },
    { path: "/loginPage", element: <LoginPage /> },
]);

export default router;
