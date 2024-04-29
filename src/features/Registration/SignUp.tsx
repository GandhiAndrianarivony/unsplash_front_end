import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import CREATE_USER from "../../graphql/mutations/signUp";

function SignUp() {
    const navigate = useNavigate();
    const initData = {
        username: "",
        email: "",
        location: "",
        phoneNumber: "",
        website: "",
        gender: "",
        interest: "",
        bio: "",
        password: "",
    };
    const [userData, setUserData] = useState(initData);
    const [errorrMesssage, setErrorMessage] = useState("");

    const [createUser, {}] = useMutation(CREATE_USER);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // console.log(`User created with success: ${userData.username}`);

        try {
            //Send signup data to the server
            const response = await createUser({
                variables: {
                    username: userData.username,
                    email: userData.email,
                    location: userData.location,
                    phoneNumber: userData.phoneNumber,
                    website: userData.website,
                    gender: userData.gender,
                    interests: userData.interest,
                    bio: userData.bio,
                    password: userData.password,
                },
            });
            console.log(response);

            const { data } = response;

            // Assuming the GraphQL mutation returns a success flag
            if (data.createUser.success) {
                // Redirect to login page or any other appropriate page
                navigate("/");
            } else {
                // Handle signup failure
                setErrorMessage("Failed to create user");
            }
        } catch (error) {
            console.log(`SignUp error : ${error}`);
        }
    };

    return (
        <div className="flex justify-center mt-5">
            <div className="w-96">
                <div className="text-center">
                    <h1 className="text-3xl block font-bold">Join Unsplash</h1>
                    <p>Welcome</p>
                </div>
                <form onSubmit={handleSubmit} className="mt-4">
                    <Input
                        onChange={(value) => {
                            setUserData({ ...userData, username: value });
                        }}
                        label="Username"
                        type="text"
                        arial_label="Write your username"
                    />
                    <Input
                        onChange={(value) => {
                            setUserData({ ...userData, email: value });
                        }}
                        label="Email"
                        type="email"
                        arial_label="Write your email"
                    />
                    <Input
                        onChange={(value) => {
                            setUserData({ ...userData, location: value });
                        }}
                        label="Location"
                        type="text"
                        arial_label="Write your location"
                    />
                    <Input
                        onChange={(value) => {
                            setUserData({ ...userData, phoneNumber: value });
                        }}
                        label="Phone Number"
                        type="text"
                        arial_label="Write your phone number"
                    />
                    <Input
                        onChange={(value) => {
                            setUserData({ ...userData, website: value });
                        }}
                        label="Website"
                        type="url"
                        arial_label="Write your website"
                    />
                    <label>
                        Gender
                        <select
                            name="gender"
                            value={userData.gender}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    gender: e.target.value,
                                })
                            }
                            className="border-2 rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                        >
                            <option value="">
                                - - Please choose an option - -
                            </option>
                            <option value="FEMALE">Female</option>
                            <option value="MALE">Male</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <Input
                        onChange={(value) => {
                            setUserData({ ...userData, interest: value });
                        }}
                        label="Interest"
                        type="text"
                        arial_label="Write your interest"
                    />
                    <Input
                        onChange={(value) => {
                            setUserData({ ...userData, bio: value });
                        }}
                        label="Bio"
                        type="text"
                        arial_label="Write your bio"
                    />
                    <Input
                        onChange={(value) => {
                            setUserData({ ...userData, password: value });
                        }}
                        label="Password"
                        type="password"
                        arial_label="Write your password"
                    />
                    <Button
                        label="Create account"
                        type="submit"
                        className="bg-black rounded font-bold w-full mt-5 text-white px-2 py-2 hover:bg-grey-400"
                    />
                    <p className="text-red-600 mt-3">{errorrMesssage}</p>
                    <div>
                        Already have an account ?  
                        <Link to="/loginPage" className="text-blue-600 hover:text-blue-600/50"> Log in</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
