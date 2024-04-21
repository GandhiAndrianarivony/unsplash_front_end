import { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { useMutation } from "@apollo/client";
import AUTHENTICATE_USER from "../../../graphql/mutations/authenticateUser";
import { useNavigate } from "react-router-dom";

function Login() {
    const initAuthData = { username: "", password: "" };
    const [authData, setAuthData] = useState(initAuthData);
    const [errorrMesssage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const [authenticateUser, {}] = useMutation(AUTHENTICATE_USER);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Send authentication data to the api
            const { data } = await authenticateUser({
                variables: {
                    username: authData.username,
                    password: authData.password,
                },
            });

            if (!data.tokenAuth.success) {
                setErrorMessage("Wrong password or username");
            } else {
                // Save authentication token to local storage
                localStorage.setItem("tokenAuth", data.tokenAuth.token.token);
                // Re-initialize authData to empty
                setAuthData(initAuthData);
                navigate("/");
            }
        } catch (error) {
            console.log(`Login error: ${error}`);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="w-96">
                <div className="text-center">
                    <h1 className="text-3xl block font-bold">Login</h1>
                    <p>Welcome back</p>
                </div>
                <form onSubmit={handleSubmit} className="mt-4">
                    <Input
                        onChange={(value) => {
                            setAuthData({ ...authData, username: value });
                        }}
                        label="Username"
                        type="text"
                        arial_label="Write your username"
                    />
                    <Input
                        onChange={(value) => {
                            setAuthData({ ...authData, password: value });
                        }}
                        label="Password"
                        type="password"
                        arial_label="Write your password"
                    />
                    <Button
                        label="Submit"
                        type="submit"
                        className="bg-black font-bold w-full mt-5 text-white px-2 py-2"
                    />
                    <p className="text-red-600 mt-3">{errorrMesssage}</p>
                </form>
            </div>
        </div>
    );
}

export default Login;
