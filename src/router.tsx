import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/PageNotFound.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import ViewProfilePage from "./pages/ViewProfilePage.tsx";
import { Like } from "./components/profiles/Like.tsx";
import { Statistics } from "./components/profiles/Statistics.tsx";
import Collection from "./components/profiles/Collection.tsx";

const router = createBrowserRouter([
    { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
    { path: "/signupPage", element: <RegisterPage /> },
    { path: "/loginPage", element: <LoginPage /> },
    {
        path: "/profile",
        element: <ViewProfilePage />,
        children: [
            {
                path: "likes/",
                element: <Like />,
            },
            {
                path: "stats/",
                element: <Statistics />,
            },
            {
                path: "collections/",
                element: <Collection />,
            },
        ],
    },
]);

export default router;
