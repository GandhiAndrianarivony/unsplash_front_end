import { useQuery } from "@apollo/client";

import { FaRegHeart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";

import GET_IMAGES from "../../graphql/queries/getImageList";
import ImageItem from "./ImageItem";
import Button from "../ui/Button";
import UserProfile from "../users/UserProfile";

type PropsType = {
    searchedData?: any;
};

function ImageList({ searchedData }: PropsType): string | JSX.Element {
    const { loading, error, data } = useQuery(GET_IMAGES);

    if (loading) return "Loading ...";
    if (error) return `Error: ${error}`;

    const buttonIconSize = "20px";

    const buttonCommonClass =
        "absolute rounded-md bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white p1 cursor-pointer";

    return (
        <div className="container w-2/3 mx-auto">
            <div className="w-full gap-4 columns-1 md:columns-3 space-y-4">
                {data.getImages.edges.map((item: any) => (
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
                        >
                            <IoMdAdd size={buttonIconSize} />
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
                                    profile={item.node.user.profile.baseUrl}
                                />
                                <div className="ml-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                    {item.node.user.username}
                                </div>
                            </div>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageList;
