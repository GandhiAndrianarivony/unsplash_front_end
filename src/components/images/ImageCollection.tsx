import { useState } from "react";

import { FaFolderPlus } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";

import Button from "../ui/Button";
import CollectionForm from "../form/CollectionForm";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_IMAGE_COLLECTION } from "../../lib/graphql/queries/getUserImageCollection";
import { useAuth } from "../../hooks/useAuth";
import { ImageNodeType } from "../../types/image";
import { ADD_IMAGE_TO_COLLECTION } from "../../lib/graphql/mutations/addImageToCollection";
import Card from "../Card";

type CollectionType = {
    name: string;
    images: any;
    id: string;
};

type ImageCollectionType = {
    node: CollectionType;
};

type PropsType = {
    isCollectionOpen: boolean;
    setIsCollectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactElement;
    clickedItem: ImageNodeType | undefined;
};
// Create Component
const ImageCollection = ({
    isCollectionOpen,
    setIsCollectionOpen,
    clickedItem,
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

    const [addToCollection, {}] = useMutation(ADD_IMAGE_TO_COLLECTION, {
        context: {
            headers: {
                authorization: `JWT ${token}`,
            },
        },
    });

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

    const onClick = async (imageId: string, collectionId: string) => {
        await addToCollection({
            variables: {
                imageId: imageId,
                collectionId: collectionId,
            },
        });
    };

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
                        <CollectionForm refetch={refetch} />
                    ) : (
                        <div className="h-screen mt-3">
                            <div className=" text-center font-bold text-3xl pb-10">
                                Select a collection
                            </div>
                            <div className="max-w-lg flex gap-4 flex-wrap justify-center items-center">
                                {uCollections.map(
                                    (item: ImageCollectionType) => {
                                        const imageCollections = item.node.images;

                                        return (
                                            <div key={item.node.id}>
                                                {imageCollections.length > 0 ? (
                                                    // <p>{imageCollections[imageCollections.length-1].image.baseUrl}</p>
                                                    <Card cardTitle={item.node.name}/>
                                                ) : (
                                                    <p> </p>
                                                )}
                                                <button
                                                    className="bg-black opacity-70 hover:opacity-100 text-white text-center p-2"
                                                    onClick={
                                                        () =>
                                                            onClick(
                                                                clickedItem
                                                                    ?.node.id!,
                                                                item.node.id
                                                            )
                                                        // TODO: Add and Remove image to a collection
                                                    }
                                                >
                                                    {item.node.name}
                                                </button>
                                            </div>
                                        );
                                    }
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
