import { gql } from "@apollo/client";

export const ADD_IMAGE_TO_COLLECTION = gql`
    mutation AddImageToCollection($imageId: String!, $collectionId: String!) {
        addToCollection(collectionId: $collectionId, imageId: $imageId) {
            aiDescription
            baseUrl
            blurhashCode
            category
            createdAt
            description
            fileName
            id
        }
    }
`;
