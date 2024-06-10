import { useState } from "react";

import { FaFolderPlus } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";

import Button from "../ui/Button";
import CollectionForm from "../form/CollectionForm";
import { useQuery } from "@apollo/client";
import { GET_USER_IMAGE_COLLECTION } from "../../lib/graphql/queries/getUserImageCollection";
import { useAuth } from "../../hooks/useAuth";

type CollectionType = {
    name: string;
    id: string;
};

type ImageCollectionType = {
    node: CollectionType;
};

type PropsType = {
    isCollectionOpen: boolean;
    setIsCollectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactElement;
};
// Create Component
const ImageCollection = ({
    isCollectionOpen,
    setIsCollectionOpen,
    children,
}: PropsType) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClickedCB, setIsClickedCB] = useState(false);
    // const [collectionData, setCollectionData] = useState<any | null>(null);

    const { token } = useAuth();

    const iconButtonClass =
        "absolute left-0 top-0 p-1 my-3 mx-3 opacity-70 hover:opacity-100 transition-opacity duration-200";
    const hoveringTextClass =
        "absolute whitespace-nowrap bg-white p-1 border-2 m-8 top-0";

    const { loading, error, data, refetch } = useQuery(
        GET_USER_IMAGE_COLLECTION,
        {
            context: {
                headers: { authorization: `JWT ${token}` },
            },
        }
    );

    if (loading) return "Loading ...";
    if (error) return `Error: ${error}`;

    const uCollections = data.getCollections.edges;

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
                        <CollectionForm refetch={refetch}/>
                    ) : (
                        <div className="h-screen mt-3">
                            <div className=" text-center font-bold text-3xl pb-10">
                                Select a collection
                            </div>
                            <div className="max-w-lg flex gap-4 flex-wrap justify-center items-center">
                                {uCollections.map(
                                    (item: ImageCollectionType) => (
                                        <button
                                            key={item.node.id}
                                            className="bg-black opacity-70 hover:opacity-100 text-white text-center p-2"
                                        >
                                            {item.node.name}
                                        </button>
                                    )
                                )}
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
