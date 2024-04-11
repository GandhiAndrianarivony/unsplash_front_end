import React from "react";
import LoginInput from "./LoginInput";

function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[75vh] p-6">
                <div className="text-center">
                    <h1 className="text-3xl block font-bold">Login</h1>
                    <p>Welcome back.</p>
                </div>
                <hr className="mt-3" />
                <div className="mt-4">
                    <form>
                        <LoginInput field={"Email"} />
                        <LoginInput field={"Password"} />
                        <button className="bg-black w-full mt-5 text-white px-2 py-2">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
