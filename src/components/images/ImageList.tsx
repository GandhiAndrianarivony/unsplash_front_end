import { useQuery } from "@apollo/client";

import { FaRegHeart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";

import GET_IMAGES from "../../lib/graphql/queries/getImageList";
import ImageItem from "./ImageItem";
import Button from "../ui/Button";
import UserProfile from "../users/UserProfile";
import { useEffect, useState } from "react";
import ImageCollection from "./ImageCollection";
import { ImageNodeType } from "../../types/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

type PropsType = {
    searchedData?: any;
};

function ImageList({ searchedData }: PropsType): string | JSX.Element {
    const [isHovered, setIsHovered] = useState(false);
    const [isCollectionOpen, setIsCollectionOpen] = useState(false);
    const [clickedItem, setClickedItem] = useState<ImageNodeType>();
    const [hasMore, setHasMore] = useState(true);
    const [items, setItems] = useState<any[]>([]); 

    const navigate = useNavigate();

    // Load env variable
    const env = import.meta.env;
    const imageURI = env.VITE_BACKEND_IP_ADDRESS;

    const { isAuthenticated, checkAuthUser, token } = useAuth();

    useEffect(() => {
        checkAuthUser();
    }, [token, isAuthenticated]);

    const { loading, error, data, fetchMore } = useQuery(GET_IMAGES, {
        // pollInterval: 5000,
        variables: { first: 10 },
        onCompleted: (data) => {
            if (data) {
                setItems(data.getImages.edges);
                setHasMore(data.getImages.pageInfo.hasNextPage);
            }
        },
    });

    //Fonction pour charger plus de donnees
    const fetchMoreData = () => {
        fetchMore({
            variables: {
                first: 10,
                after: data.getImages.pageInfo.endCursor,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return previousResult;

                const newEdges = fetchMoreResult.getImages.edges;
                const pageInfo = fetchMoreResult.getImages.pageInfo;

                if (newEdges.length === 0 || !pageInfo.hasNextPage) {
                    setHasMore(false);
                }

                setItems((prevItems) => [...prevItems, ...newEdges]);

                return {
                    getImages: {
                        __typename: previousResult.getImages.__typename,
                        edges: [...previousResult.getImages.edges, ...newEdges],
                        pageInfo,
                    },
                };
            },
        });
    };

    if (loading) return "Loading ...";
    if (error) return `Error: ${error}`;

    const buttonIconSize = "20px";
    const buttonCommonClass =
        "absolute rounded-md bg-gray-200 opacity-0 group-hover:opacity-100 hover:bg-white p1 cursor-pointer";

    const images = searchedData ?? data.getImages;

// TODO: Check infinitescroll implementation
    return (
        <div className="relative">
            <div className="container w-2/3 mx-auto">
                <InfiniteScroll
                    dataLength={images.edges.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={<h4>Yay! You have seen it all</h4>}
                >
                    <div
                        className={`w-full gap-4 columns-1 md:columns-3 space-y-4`}
                    >
                        {images.edges.map((item: any) => (
                            <div
                                key={item.node.id}
                                className="relative group border-none"
                            >
                                <ImageItem
                                    className="w-full contrast-125 opacity-85 group-hover:opacity-100 transition-opacity"
                                    item={item}
                                />

                                <Button
                                    type="button"
                                    className={`top-0 right-[60px] mt-5 p-1 ${buttonCommonClass}`}
                                >
                                    <FaRegHeart size={buttonIconSize} />
                                </Button>

                                <Button
                                    type="button"
                                    className={`top-0 right-[20px] mt-5 p-1 ${buttonCommonClass}`}
                                    setIsHovered={setIsHovered}
                                    onClick={() => {
                                        setIsCollectionOpen(true);
                                        setClickedItem(item);
                                    }}
                                >
                                    <IoMdAdd size={buttonIconSize} />
                                    {isHovered ? (
                                        <div className="absolute border-2 whitespace-nowrap top-0 right-[-230px] z-10 bg-white mt-7 p-1">
                                            Add this image to a collection
                                        </div>
                                    ) : (
                                        <p></p>
                                    )}
                                </Button>

                                <Button
                                    type="button"
                                    className={`bottom-0 right-[20px] mb-5 p-1 ${buttonCommonClass}`}
                                >
                                    <IoMdArrowDown size={buttonIconSize} />
                                </Button>

                                <Button
                                    type="button"
                                    className={`bottom-0 left-[20px] p-1 mb-3 absolute`}
                                >
                                    <div className="flex">
                                        <UserProfile
                                            className="w-[36px] h-[36px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white p1 cursor-pointer"
                                            profile={
                                                item.node.user.profile.baseUrl
                                            }
                                        />
                                        <div className="ml-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                            {item.node.user.username}
                                        </div>
                                    </div>
                                </Button>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
                <ImageCollection
                    isCollectionOpen={isCollectionOpen}
                    setIsCollectionOpen={setIsCollectionOpen}
                    clickedItem={clickedItem}
                >
                    {clickedItem && (
                        <img
                            src={`http://${imageURI}:${env.VITE_BACKEND_PORT}${clickedItem.node.baseUrl}`}
                            alt=""
                            className="hidden xl:block w-80 object-cover bg-no-repeat rounded-r-lg"
                        />
                    )}
                </ImageCollection>
            </div>
            {isCollectionOpen && (
                <div className="fixed w-full z-[15] opacity-55 top-0 bg-black h-full text-white"></div>
            )}
        </div>
    );
}

export default ImageList;

