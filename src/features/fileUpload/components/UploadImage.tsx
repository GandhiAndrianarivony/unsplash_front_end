import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import UPLOAD_IMAGE from "../../../graphql/mutations/uploadImage";
import Button from "../../../components/ui/Button";
import Header from "../../../components/Header";
import InputImage from "./InputImage";
import ImageDisplayed from "./ImageDisplayed";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { convertToDate } from "../../../utils/helpers";

type DecodedJWTType = {
    payload: string;
};

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

    useEffect(() => {
        const navigateToLoginPage = () => {
            if (authToken) {
                const decodedJWTToken = jwtDecode<DecodedJWTType>(authToken);

                // Convert expired date to milliseconds
                const expiredAt = convertToDate(
                    JSON.parse(decodedJWTToken.payload).exp
                );
                // get current date in milliseconds
                const currentDate = new Date().getTime();
                // Check if Authentication token is expired
                if (expiredAt - currentDate <= 0) {
                    setAuthToken(null);
                    localStorage.removeItem("tokenAuth");
                    navigate("/loginPage");
                }
            } else {
                navigate("/loginPage");
            }
        };
        navigateToLoginPage();
    }, [authToken]);

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
                setErrorMessage(`An error occurred while uploading image: ${error}`);
            }
        }

        return;
    };

    return (
        <div>
            <Header />

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-center w-full h-svh">
                    <div className="text-2xl font-bold mb-5">Upload Image</div>
                    <p className="text-green-600 mb-3">{successMessage}</p>
                    <p className="text-red-600 mb-3">{errorMessage}</p>
                    <label className="flex flex-col items-center justify-center w-3/4 md:w-1/3 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100">
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
                    <div className="flex justify-end md:w-1/3 mt-3">
                        <Button
                            label="Cancel"
                            type="button"
                            className="border rounded-lg px-3 mr-4 hover:bg-black hover:text-white"
                            onClick={() => {
                                setIsImageLoaded(false);
                            }}
                        />
                        <Button
                            label="Submit"
                            type="submit"
                            className="bg-black text-white rounded-lg px-3 mr-4 hover:border hover:bg-white hover:text-black"
                        />
                    </div>
                    
                </div>
            </form>
        </div>
    );
}
