import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/PageNotFound.tsx";
import UploadImage from "./features/fileUpload/components/UploadImage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const router = createBrowserRouter([
    { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
    { path: "/upload_image", element: <UploadImage /> },
    { path: "/loginPage", element: <LoginPage /> },
]);

export default router;
