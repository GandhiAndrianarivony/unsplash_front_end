import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import UPLOAD_IMAGE from "../../../graphql/mutations/uploadImage";
import Button from "../../../components/ui/Button";
import InputImage from "./InputImage";
import ImageDisplayed from "./ImageDisplayed";
import { useNavigate } from "react-router-dom";
import { isAuthTokenExpired } from "../../../utils/helpers";

export default function UploadImage() {
    const [authToken, setAuthToken] = useState<string | null>(
        localStorage.getItem("tokenAuth")
    );
    const navigate = useNavigate();
    const [file, setFile] = useState<Blob | MediaSource>();
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const [uploadImage, {}] = useMutation(UPLOAD_IMAGE, {
        context: {
            headers: {
                authorization: `JWT ${authToken}`,
            },
        },
    });

    // useEffect(() => {
    //     const navigateToLoginPage = () => {
    //         if (isAuthTokenExpired(authToken)) {
    //             setAuthToken(null);
    //             localStorage.removeItem("tokenAuth");
    //             navigate("/loginPage");
    //         } else {
    //             navigate("/loginPage");
    //         }
    //     };
    //     navigateToLoginPage();
    // }, [authToken]);

    useEffect(() => {
        const navigateToLoginPage = () => {
            if (authToken) {
                console.log(isAuthTokenExpired(authToken));
                if (isAuthTokenExpired(authToken)) {
                    setAuthToken(null);
                    localStorage.removeItem("tokenAuth");
                    navigate("/loginPage");
                }
            } else {
                navigate("/loginPage");
            }
        };
        navigateToLoginPage();

        if(successMessage || errorMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage("");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [authToken, successMessage, errorMessage]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (file) {
            try {
                const response = await uploadImage({
                    variables: { file: file },
                });
                setIsImageLoaded(false);
                console.log(response);
                setSuccessMessage("Image uploaded successfully");
            } catch (error) {
                console.log("Error uploading image: ", error);
                setErrorMessage(
                    `An error occurred while uploading image: ${error}`
                );
            }
        }

        return;
    };

    return (
        <div className="bg-white p-5 rounded w-1/2">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold mb-5">Upload Image</div>
                    <p className="text-green-600 mb-3">{successMessage}</p>
                    <p className="text-red-600 mb-3">{errorMessage}</p>
                    <label className="flex flex-col items-center justify-center border border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100">
                        <ImageDisplayed
                            file={file}
                            isImageLoaded={isImageLoaded}
                        />
                        <InputImage
                            isImageLoaded={isImageLoaded}
                            onChange={(value: Blob | MediaSource) => {
                                setFile(value);
                                setIsImageLoaded(!isImageLoaded);
                            }}
                        />
                    </label>
                    <div className="flex justify-center mt-3">
                        <Button
                            label="Cancel"
                            type="button"
                            className="border rounded-lg px-3 mr-4 hover:scale-95"
                            onClick={() => {
                                setIsImageLoaded(false);
                            }}
                        />
                        <Button
                            label="Submit"
                            type="submit"
                            className="bg-black text-white rounded-lg px-3 mr-4 hover:border hover:scale-95"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
