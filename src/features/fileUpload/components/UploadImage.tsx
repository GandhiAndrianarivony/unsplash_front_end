import { useMutation } from "@apollo/client";
import { useState } from "react";
import UPLOAD_IMAGE from "../../../graphql/mutations/uploadImage";
import Button from "../../../components/ui/Button";
import Header from "../../../components/Header";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function UploadImage() {
    const authToken = localStorage.getItem("tokenAuth");
    const [file, setFile] = useState<File | null>(null);

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
                console.log(response);
                console.log("File Uploaded");
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

                    <label className="flex flex-col items-center justify-center w-3/4 md:w-1/3 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <IoCloudUploadOutline className="size-32" />

                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                    Click to upload
                                </span>{" "}
                                or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                        </div>
                        <input
                            type="file"
                            className="hidden"
                            onChange={({
                                target: { validity, files: file },
                            }) => {
                                if (
                                    validity.valid &&
                                    file &&
                                    file.length
                                ) {
                                    setFile(file[0]);
                                }
                            }}
                        />
                    </label>
                    <div className="flex justify-end md:w-1/3 mt-3">
                        <Button
                            label="Cancel"
                            type="button"
                            className="border rounded-lg px-3 mr-4 hover:bg-black hover:text-white"
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
