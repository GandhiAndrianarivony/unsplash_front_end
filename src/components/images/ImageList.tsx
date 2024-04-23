import { useQuery } from "@apollo/client";
import GET_IMAGES from "../../graphql/queries/getImageList";

function ImageList() {
    const { loading, error, data } = useQuery(GET_IMAGES);

    if (loading) return "Loading ...";
    if (error) return `Error: ${error}`;

    // console.log(data.getImages.edges[0].node.baseUrl);

    return <div>ImageList</div>;
}

export default ImageList;
