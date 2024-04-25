import { useQuery } from "@apollo/client";

import { FaRegHeart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";

import GET_IMAGES from "../../graphql/queries/getImageList";
import ImageItem from "./ImageItem";
import Button from "../ui/Button";

function ImageList(): string | JSX.Element {
    const { loading, error, data } = useQuery(GET_IMAGES);

    if (loading) return "Loading ...";
    if (error) return `Error: ${error}`;

    // console.log(data.getImages.edges[0].node.baseUrl);
    // console.log(data.getImages.edges);

    const buttonCommonClass =
        "absolute rounded-md bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white p1 cursor-pointer";

    return (
        <div className="container w-2/3 mx-auto">
            <div className="w-full gap-4 columns-1 md:columns-3 space-y-5">
                {data.getImages.edges.map((item: any) => (
                    <div key={item.node.id} className="relative group">
                        <ImageItem
                            className="w-full opacity-85 group-hover:opacity-100 transition-opacity"
                            item={item}
                        />

                        <Button
                            type="button"
                            className={`top-0 right-[75px] mt-5 p-1 ${buttonCommonClass}`}
                        >
                            <FaRegHeart size="30px" />
                        </Button>

                        <Button
                            type="button"
                            className={`top-0 right-[20px] mt-5 p-1 ${buttonCommonClass}`}
                        >
                            <IoMdAdd size="30px" />
                        </Button>

                        <Button
                            type="button"
                            className={`bottom-0 right-[20px] mb-5 p-1 ${buttonCommonClass}`}
                        >
                            <IoMdArrowDown size="30px" />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageList;
