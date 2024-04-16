import { PropsType, LoginDataType } from "./type";
import { generateRandomString } from "../../utils/helpers";

function LoginInput({ field, loginData, setLoginData }: PropsType) {
    const currentField = field.toLocaleLowerCase();
    const htmlFor = generateRandomString()

    const content = (
        <>
            <label className="block text-base mb-2 mt-2" htmlFor={htmlFor}>
                {field}
            </label>
            <input
                className="border-2 rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                id={htmlFor}
                type={currentField !== "password" ? "text" : "password"}
                value={loginData[currentField as keyof LoginDataType]}
                onChange={(e) =>
                    setLoginData({
                        ...loginData,
                        [currentField]: e.target.value,
                    })
                }
                required
            />
        </>
    );

    return content;
}

export default LoginInput;
