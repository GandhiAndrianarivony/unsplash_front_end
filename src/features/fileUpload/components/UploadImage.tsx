import { useMutation } from "@apollo/client";
import { useState } from "react";
import UPLOAD_IMAGE from "../../../graphql/mutations/uploadImage";
import Button from "../../../components/ui/Button";

export default function UploadImage() {
    const authToken = localStorage.getItem("tokenAuth");
    const [file, setFile] = useState();

    const [uploadImage, {}] = useMutation(UPLOAD_IMAGE, {
        context: {
            headers: {
                authorization: `JWT ${authToken}`,
            },
        },
    });

    const handleChange = (event: any) => {
        setFile(event.target.files[0]);
        console.log(event);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            
            try {
                const response = await uploadImage({
                    variables: { file: formData },
                });
                console.log("Image uploaded: ", response.data.uploadImage.url);
            } catch (error) {
                console.log("Error uploading image: ", error);
            }
        }

        return;
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container mx-auto mt-5 w-3/4 h-[52rem] border-dashed border-2 border-gray-400 mb-5 flex justify-center items-center">
                    <div className="border-2 border-gray-400 p-5 flex flex-col justify-center items-center">
                        <div className="relative">
                            <img
                                className="size-40"
                                src="gallery-icon.webp"
                                alt="Upload Image"
                            />
                            <div className="absolute top-0 right-0">
                                <label>
                                    <img
                                        className="cursor-pointer bg-yellow-500 hover:bg-yellow-400 rounded-full"
                                        src="plus.svg"
                                        alt="Upload Image"
                                    />
                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <p className="text-xl text-center font-bold mt-3">
                            Drag and drop or browse
                            <br /> to choose a file
                        </p>
                        <p className="text-sm mt-3">JPEG only - Max 50 MB</p>
                    </div>
                </div>
                <hr />
                <div className="flex justify-end mt-3">
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
            </form>
        </div>
    );
}
