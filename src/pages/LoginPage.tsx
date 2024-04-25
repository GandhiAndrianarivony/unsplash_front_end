import Header from "../components/Header";
import Login from "../features/authentication/components/Login";

function LoginPage() {
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
