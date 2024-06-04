import { MdOutlineCreateNewFolder } from "react-icons/md";
import Button from "../ui/Button";
import { useState } from "react";

type PropsType = {
    isCollectionOpen: boolean;
    setIsCollectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactElement;
};
const ImageCollection = ({
    isCollectionOpen,
    setIsCollectionOpen,
    children,
}: PropsType) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleClick = () => {
        console.log("Create New Collection");
    };

    return (
        <div
            className={`fixed inset-0 z-20 flex justify-center items-center ${
                isCollectionOpen ? "visible" : "invisible"
            }`}
            onClick={() => {
                setIsCollectionOpen(false);
            }}
        >
            <div
                className="relative bg-blue-200 flex rounded-lg w-1/2 h-1/2"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex-1 flex justify-center items-center">
                    <div className="max-w-lg flex gap-4 flex-wrap justify-center items-center">
                        <div className=" bg-black text-white text-center p-2">
                            Collection 1
                        </div>{" "}
                        <div className=" bg-black text-white text-center p-2">
                            Collection 1
                        </div>{" "}
                        <div className=" bg-black text-white text-center p-2">
                            Collection 1
                        </div>
                    </div>
                </div>
                {children}
                <Button
                    type="button"
                    className="absolute left-0 top-0 p-1 my-3 mx-3 opacity-70 hover:opacity-100 transition-opacity duration-200"
                    setIsHovered={setIsHovered}
                    onClick={handleClick}
                >
                    <MdOutlineCreateNewFolder size={"30px"} />
                    {isHovered ? (
                        <div className="absolute whitespace-nowrap bg-white p-1 border-2 m-8 top-0">
                            Add this image to a collection
                        </div>
                    ) : (
                        <p></p>
                    )}
                </Button>
            </div>
        </div>
    );
};

export default ImageCollection;
