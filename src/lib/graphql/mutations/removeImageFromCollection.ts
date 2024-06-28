import { gql } from "@apollo/client";

const REMOVE_IMAGE_FROM_COLLECTION = gql`
    mutation RemoveImageFromCollection($collectionId: String!, $imageId: String!) {
        removeImageFromCollection(
            collectionId: $collectionId
            imageId: $imageId
        ) {
            statusCode
            statusMessage
        }
    }
`;

export default REMOVE_IMAGE_FROM_COLLECTION;
