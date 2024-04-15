import { useState } from "react";
import { useMutation } from "@apollo/client";

import LoginInput from "./LoginInput";
import { LoginDataType } from "./type";
import { LOGIN_MUTATION } from "./gql/mutations";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

function Login() {
    const initLoginData: LoginDataType = { username: "", password: "" };
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState(initLoginData);

    const [errorMessage, setErrorMessage] = useState("");

    const [tokenAuth, {}] = useMutation(LOGIN_MUTATION);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data } = await tokenAuth({
                variables: {
                    username: loginData.username,
                    password: loginData.password,
                },
            });

            if (!data.tokenAuth.success) {
                setErrorMessage("Wrong password or username");
            } else {
                localStorage.setItem("tokenAuth", data.tokenAuth.token.token);
                setLoginData(initLoginData);
                navigate("/");
            }
        } catch (error) {
            console.log(`Login error: ${error}`);
        }
    };

    const content = (
        <div>
            <Header />
            <div className="flex justify-center h-screen">
                <div className="w-96 p-6">
                    <div className="text-center">
                        <h1 className="text-3xl block font-bold">Login</h1>
                        <p>Welcome back.</p>
                    </div>
                    <hr className="mt-3" />
                    <div className="mt-4">
                        <form onSubmit={handleSubmit}>
                            <LoginInput
                                field={"Username"}
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
                            <p className="text-red-600 mt-3">{errorMessage}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

    return content
}

export default Login;
