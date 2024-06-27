import { gql } from "@apollo/client";

const UNLIKE_IMAGE = gql`
    mutation UnlikeImage($imageId: String!) {
        unlikeImage(imageId: $imageId) {
            statusCode
            statusMessage
        }
    }
`;

export default UNLIKE_IMAGE;
