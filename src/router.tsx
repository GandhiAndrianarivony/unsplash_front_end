import App from "./App.tsx";
import Login from "./components/Login/Login.tsx";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/PageNotFound/PageNotFound.tsx";
import UploadImage from "./components/UploadImage/UploadImage.tsx";

const authToken: String | null = localStorage.getItem("tokenAuth");
console.log(authToken);

const router = createBrowserRouter([
    { path: "/", element: <App />, errorElement: <ErrorPage /> },
    { path: "/login", element: !authToken ? <Login /> : <App /> },
    {path: "/upload_image", element: <UploadImage/> }
]);

export default router;
