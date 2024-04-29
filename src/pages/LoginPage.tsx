import { useEffect } from "react";
import Header from "../components/Header";
import Login from "../features/authentication/components/Login";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const authToken = localStorage.getItem("tokenAuth");
    const navigate = useNavigate();
    useEffect(() => {
        const isLogged = () => {
            if (authToken) {
                navigate("/");
            }
        };
        isLogged();
    }, []);

    return (
        <div>
            <Header />
            <div className="pt-20">
                <Login />
            </div>
        </div>
    );
}

export default LoginPage;
