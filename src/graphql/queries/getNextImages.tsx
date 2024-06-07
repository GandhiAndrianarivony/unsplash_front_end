import { gql } from "@apollo/client";

const baseResponse = `
    edges {
        node {
            id
            fileName
            baseUrl
            description
            blurhashCode
            category
            aiDescription
            user {
                email
                username
            }
        }
    }
    pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
    }
`;

const IMAGE_QUERY_NEXT = gql`
    query GetNextImage(
        $cursorId: String!
    ) {
        getImages(first:  10, after: $cursorId){
            ${baseResponse}
        }
    }
`;

export default IMAGE_QUERY_NEXT;