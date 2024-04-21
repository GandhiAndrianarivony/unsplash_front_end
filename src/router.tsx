import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/PageNotFound.tsx";
import UploadImage from "./components/UploadImage/UploadImage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const authToken: String | null = localStorage.getItem("tokenAuth");
console.log(authToken);

const router = createBrowserRouter([
    { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
    { path: "/upload_image", element: <UploadImage /> },
    {
        path: "/loginPage",
        element: !authToken ? <LoginPage /> : <Navigate to="/" />,
    },
]);

export default router;
