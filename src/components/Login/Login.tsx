import { useState } from "react";
import LoginInput from "./LoginInput";
import { LoginDataType } from "./type";

function Login() {
    const initLoginData: LoginDataType = { email: "", password: "" };
    const [loginData, setLoginData] = useState(initLoginData);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(loginData);
        setLoginData(initLoginData)
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 p-6">
                <div className="text-center">
                    <h1 className="text-3xl block font-bold">Login</h1>
                    <p>Welcome back.</p>
                </div>
                <hr className="mt-3" />
                <div className="mt-4">
                    <form onSubmit={handleSubmit}>
                        <LoginInput
                            field={"Email"}
                            loginData={loginData}
                            setLoginData={setLoginData}
                        />
                        <LoginInput
                            field={"Password"}
                            loginData={loginData}
                            setLoginData={setLoginData}
                        />
                        <button
                            className="bg-black w-full mt-5 text-white px-2 py-2"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
