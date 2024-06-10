import { gql } from "@apollo/client";

export const ADD_IMAGE_TO_COLLECTION = gql`
    mutation MyMutation($imageId: String!, $collectionId: String!) {
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
