import { useState } from "react";

import { FaFolderPlus } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useMutation, useQuery } from "@apollo/client";

// =================================================================
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// =================================================================

import Button from "../ui/Button";
import CollectionForm from "../form/CollectionForm";
import { GET_USER_IMAGE_COLLECTION } from "../../lib/graphql/queries/getUserImageCollection";
import { useAuth } from "../../hooks/useAuth";
import { ImageNodeType } from "../../types/image";
import { ADD_IMAGE_TO_COLLECTION } from "../../lib/graphql/mutations/addImageToCollection";
import Card from "../Card";
import REMOVE_IMAGE_FROM_COLLECTION from "../../lib/graphql/mutations/removeImageFromCollection";

const env = import.meta.env;
const imageURI = env.VITE_BACKEND_IP_ADDRESS;

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
    clickedItem, //Image to be added to collection
    children,
}: PropsType) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClickedCB, setIsClickedCB] = useState(false);

    const { token } = useAuth();

    const SLIDER_SETTING = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 1,
        swipe: true,
    };

    const iconButtonClass =
        "absolute left-0 top-0 p-1 my-3 mx-3 opacity-70 hover:opacity-100 transition-opacity duration-200";
    const hoveringTextClass =
        "absolute whitespace-nowrap bg-white p-1 border-2 m-8 top-0";

    // Define context
    const context = {
        context: {
            headers: {
                authorization: `JWT ${token}`,
            },
        },
    };
    // Add image to collection [Mutation]
    const [addToCollection, {}] = useMutation(ADD_IMAGE_TO_COLLECTION, context);

    // Remove image from collection [Mutation]
    const [removeImageFromCollection, {}] = useMutation(
        REMOVE_IMAGE_FROM_COLLECTION,
        context
    );

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

    const onAdd = async (imageId: string, collectionId: string) => {
        await addToCollection({
            variables: {
                imageId: imageId,
                collectionId: collectionId,
            },
        });
    };

    const onRemove = async (imageId: string, collectionId: string) => {
        await removeImageFromCollection({
            variables: {
                imageId: imageId,
                collectionId: collectionId,
            },
        });
    };

    const onCheck = (images: any[]) => {
        const foundImage = images.find((item) => {
            if (item) {
                return item.image.id === clickedItem!.node.id;
            }
        });
        if (foundImage) {
            return true;
        }
        return false;
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
                className="relative bg-white flex rounded-lg m-5 md:m-0 w-[600px] md:w-[800px] h-[300px] md:h-[600px]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex-1 flex flex-col justify-center items-center">
                    {isClickedCB ? (
                        <CollectionForm refetch={refetch} />
                    ) : (
                        <div className="mt-3 flex flex-col flex-wrap justify-center items-center">
                            <div className="text-center font-bold text-lg md:text-3xl mb-10">
                                Select a collection
                            </div>
                            <div className="slider-container w-[200px] md:w-[400px] p-2">
                                <Slider {...SLIDER_SETTING}>
                                    {uCollections.map(
                                        (collection: ImageCollectionType) => {
                                            const imageCollections = collection.node.images;

                                            let isChecked = false;
                                            if (clickedItem) {
                                                isChecked =
                                                    onCheck(imageCollections);
                                            }
                                            return (
                                                <div key={collection.node.id}>
                                                    {imageCollections.length >
                                                    0 ? (
                                                        <Card
                                                            cardTitle={
                                                                collection.node.name
                                                            }
                                                            
                                                            imageSource={
                                                                `http://${imageURI}:${env.VITE_BACKEND_PORT}${imageCollections[
                                                                    imageCollections.length - 1].image.baseUrl}`
                                                            }
                                                            onAdd={() =>
                                                                onAdd(
                                                                    clickedItem?.node.id!,
                                                                    collection.node.id
                                                                )
                                                            }
                                                            onRemove={() =>
                                                                onRemove(
                                                                    clickedItem?.node.id!, 
                                                                    collection.node.id
                                                                )
                                                            }
                                                            isChecked={
                                                                isChecked
                                                            }
                                                        />
                                                    ) : (
                                                        <>
                                                            <Card
                                                                cardTitle={
                                                                    collection.node.name
                                                                }
                                                                imageSource={
                                                                    `/src/assets/images/collection-bg.jpg`
                                                                }
                                                                onAdd={() =>
                                                                    onAdd(
                                                                        clickedItem?.node.id!,
                                                                        collection.node.id
                                                                    )
                                                                }
                                                                onRemove={() =>
                                                                    // onRemove()
                                                                    console.log("[INFO] No image found")
                                                                }
                                                            />
                                                        </>
                                                    )}
                                                </div>
                                            );
                                        }
                                    )}
                                </Slider>
                            </div>
                        </div>
                    )}
                </div>
                {children}
                {!isClickedCB ? (
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
                ) : (
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
//
