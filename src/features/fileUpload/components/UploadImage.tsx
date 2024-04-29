import { useMutation } from "@apollo/client";
import { useEffect, useMemo, useState } from "react";
import UPLOAD_IMAGE from "../../../graphql/mutations/uploadImage";
import Button from "../../../components/ui/Button";
import Header from "../../../components/Header";
import InputImage from "./InputImage";
import ImageDisplayed from "./ImageDisplayed";
import { useNavigate } from "react-router-dom";

export default function UploadImage() {
    const authToken = localStorage.getItem("tokenAuth");

    const navigate = useNavigate();
    useEffect(() => {
        const navigateTo = () => {
            if (!authToken) {
                navigate("/loginPage");
            }
        };
        navigateTo();
    }, []);

    const [file, setFile] = useState<Blob | MediaSource>();
    const [isImageLoaded, setIsImageLoaded] = useState(false);

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
                const response = await uploadImage({
                    variables: { file: file },
                });
                setIsImageLoaded(false);
                console.log(response);
            } catch (error) {
                console.log("Error uploading image: ", error);
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
