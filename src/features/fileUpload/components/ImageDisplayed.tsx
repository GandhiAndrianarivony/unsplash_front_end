import { IoCloudUploadOutline } from "react-icons/io5";

type PropsType = {
    isImageLoaded: boolean;
    file?: Blob | MediaSource;
};

function ImageDisplayed({ isImageLoaded, file }: PropsType) {
    return (
        <>
            {isImageLoaded ? (
                <div>
                    <img
                        src={file ? URL.createObjectURL(file) : ""}
                        alt="Image sélectionnée"
                        className="max-w-100 max-h-52 p-3"
                    />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <IoCloudUploadOutline className="size-32" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or JPEG (MAX. 800x400px)
                    </p>
                </div>
            )}
        </>
    );
}

export default ImageDisplayed;
