import { gql } from "@apollo/client";

export const CREATE_NEW_COLLECTION = gql`
    mutation CreateCollection($name: String!) {
        createCollection(name: $name) {
            errorMessage
            statusCode
            statusMessage
        }
    }
`;
