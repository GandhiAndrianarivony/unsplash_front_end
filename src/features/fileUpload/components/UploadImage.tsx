import { useMutation } from "@apollo/client";
import { useState } from "react";
import UPLOAD_IMAGE from "../../../lib/graphql/mutations/uploadImage";
import Button from "../../../components/ui/Button";
import InputImage from "./InputImage";
import ImageDisplayed from "./ImageDisplayed";

type PropsType = {
    open?: boolean;
    authToken?: string | null;
    onClose?: () => void;
};

export default function UploadImage({ open, onClose, authToken }: PropsType) {
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (file) {
            try {
                await uploadImage({
                    variables: { file: file },
                });
                setIsImageLoaded(false);
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
        <div
            className={`fixed inset-0 flex justify-center items-center ${
                open ? "visible" : "invisible"
            }`}
            onClick={() => {
                if (onClose) {
                    onClose();
                }
            }}
        >
            {/* <Header /> */}

            <form onSubmit={handleSubmit}>
                <div
                    className="flex flex-col items-center justify-center bg-white w-[700px] py-5 rounded-xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="text-2xl font-bold mb-5">Upload Image</div>
                    <p className="text-green-600 mb-3">{successMessage}</p>
                    <p className="text-red-600 mb-3">{errorMessage}</p>
                    <label className="flex flex-col items-center justify-center w-3/4 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100">
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
