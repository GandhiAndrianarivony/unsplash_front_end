import { gql } from "@apollo/client";

const LIKE_IMAGE = gql`
    mutation LikeImage($imageId: String!) {
        likeImage(imageId: $imageId) {
            statusCode
            statusMessage
        }
    }
`;

export default LIKE_IMAGE;
