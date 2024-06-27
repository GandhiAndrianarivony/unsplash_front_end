import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import { IoMdAdd } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";

import GET_IMAGES from "../../lib/graphql/queries/getImageList";
import ImageItem from "./ImageItem";
import Button from "../ui/Button";
import UserProfile from "../users/UserProfile";
import ImageCollection from "./ImageCollection";
import { ImageNodeType } from "../../types/image";
import { useAuth } from "../../hooks/useAuth";
import Like from "./Like";

type PropsType = {
    searchedData?: any;
};

function ImageList({ searchedData }: PropsType): string | JSX.Element {
    const [isHovered, setIsHovered] = useState(false);
    const [isCollectionOpen, setIsCollectionOpen] = useState(false);
    const [clickedItem, setClickedItem] = useState<ImageNodeType>();
    const [hasMore, setHasMore] = useState(true);
    const [items, setItems] = useState<any[]>([]);
    const [userId, setUserId] = useState("");

    const navigate = useNavigate();

    
    // Query images
    const { loading, error, data, fetchMore, refetch } = useQuery(GET_IMAGES, {
        variables: { first: 10 },
        onCompleted: (data) => {
            if (data) {
                setHasMore(data.getImages.pageInfo.hasNextPage);
            }
        },
    });
    
    // Get authentication token
    const { isAuthenticated, checkAuthUser, token, userData } = useAuth();

    useEffect(() => {
        checkAuthUser();
        if (userData && token) {
            setUserId(userData.getCurrentUser.id);
        }
        refetch()
    }, [token, isAuthenticated]);

    if (loading) return "Loading ...";
    if (error) return `Error: ${error}`;

    const buttonIconSize = "20px";
    const buttonCommonClass =
        "absolute rounded-md bg-gray-200 opacity-0 group-hover:opacity-100 hover:bg-white p-1 cursor-pointer";

    const images = searchedData ?? data.getImages;

    // Load env variable
    const env = import.meta.env;
    const imageURI = env.VITE_BACKEND_IP_ADDRESS;

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

    return (
        <div className="relative">
            <div className="container w-2/3 mx-auto">
                <InfiniteScroll
                    dataLength={images.edges.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                >
                    <div
                        className={`w-full gap-4 columns-1 md:columns-3 space-y-4`}
                    >
                        {images.edges.map((item: any) => {
                            const foundUser = item.node.usersLike.find(
                                (u: any) => u.pk === "1"
                            );
                            const isLike = foundUser?.pk === userId;
                            return (
                                <div
                                    key={item.node.id}
                                    className="relative group border-none overflow-visible"
                                >
                                    <div className="overflow-hidden">
                                        <ImageItem
                                            className="w-full contrast-125 opacity-85 group-hover:opacity-100 transition-transform group-hover:scale-125 duration-100 object-cover bg-no-repeat"
                                            item={item}
                                        />
                                    </div>

                                    <Button
                                        type="button"
                                        className={`top-0 right-[60px] mt-5 p-1 ${buttonCommonClass}`}
                                    >
                                        <Like
                                            imageId={item.node.id}
                                            isLiked={isLike}
                                        />
                                    </Button>

                                    <Button
                                        type="button"
                                        className={`top-0 right-[20px] mt-5 p-1 ${buttonCommonClass}`}
                                        setIsHovered={setIsHovered}
                                        onClick={() => {
                                            if (isAuthenticated) {
                                                setIsCollectionOpen(true);
                                                setClickedItem(item);
                                            } else {
                                                navigate("/loginPage");
                                            }
                                        }}
                                    >
                                        <IoMdAdd size={buttonIconSize} />
                                        {isHovered ? (
                                            <div className="absolute border-2 whitespace-nowrap top-0 right-0 bg-white mt-8 p-1">
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
                                                    item.node.user.profile
                                                        .baseUrl
                                                }
                                            />
                                            <div className="ml-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                                {item.node.user.username}
                                            </div>
                                        </div>
                                    </Button>
                                </div>
                            );
                        })}
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
