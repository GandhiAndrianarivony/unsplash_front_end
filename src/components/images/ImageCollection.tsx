import { useState } from "react";

import { FaFolderPlus } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";

import Button from "../ui/Button";
import CollectionForm from "../form/CollectionForm";

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
    const [isClickedCB, setIsClickedCB] = useState(false);

    const iconButtonClass =
        "absolute left-0 top-0 p-1 my-3 mx-3 opacity-70 hover:opacity-100 transition-opacity duration-200";
    const hoveringTextClass =
        "absolute whitespace-nowrap bg-white p-1 border-2 m-8 top-0";

    return (
        <div
            className={`fixed inset-0 z-20 flex justify-center items-center ${
                isCollectionOpen ? "visible" : "invisible"
            }`}
            onClick={() => {
                setIsCollectionOpen(false);
                setIsClickedCB(false);
                setIsHovered(false);
            }}
        >
            <div
                className="relative bg-white flex rounded-lg w-1/2 h-1/2"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex-1 flex flex-col justify-center items-center ">
                    {isClickedCB ? (
                        <CollectionForm />
                    ) : (
                        <div className="h-screen mt-3">
                            <div className=" text-center font-bold text-3xl pb-10">
                                Select a collection
                            </div>
                            <div className="max-w-lg flex gap-4 flex-wrap justify-center items-center">
                                <div className=" bg-black text-white text-center p-2">
                                    Collection 1
                                </div>
                                <div className=" bg-black text-white text-center p-2">
                                    Collection 1
                                </div>
                                <div className=" bg-black text-white text-center p-2">
                                    Collection 1
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {children}
                {!isClickedCB && (
                    <Button
                        type="button"
                        className={iconButtonClass}
                        setIsHovered={setIsHovered}
                        onClick={() => setIsClickedCB(true)}
                    >
                        <FaFolderPlus size={"30px"} />
                        {isHovered ? (
                            <div className={hoveringTextClass}>
                                Create new collection
                            </div>
                        ) : (
                            <p></p>
                        )}
                    </Button>
                )}
                {isClickedCB && (
                    <Button
                        type="button"
                        className={iconButtonClass}
                        onClick={() => setIsClickedCB(false)}
                    >
                        <FaCircleArrowLeft size={"30px"} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ImageCollection;
