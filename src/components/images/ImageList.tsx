import { useQuery } from "@apollo/client";

import GET_IMAGES from "../../graphql/queries/getImageList";
import ImageItem from "./ImageItem";

function ImageList() {
    const { loading, error, data } = useQuery(GET_IMAGES);

    if (loading) return "Loading ...";
    if (error) return `Error: ${error}`;

    // console.log(data.getImages.edges[0].node.baseUrl);
    // console.log(data.getImages.edges);

    return (
        <div className="container mx-auto">
            <div className="w-full mx-auto gap-4 columns-1 md:columns-3 space-y-4">
                {data.getImages.edges.map((item: any) => (
                    <ImageItem key={item.node.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default ImageList;
