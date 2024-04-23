import { gql } from "@apollo/client";

const GET_IMAGES = gql`
    query MyQuery {
        getImages(first: 20, after: "YXJyYXljb25uZWN0aW9uOjE2") {
            edges {
                node {
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
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
`;

export default GET_IMAGES;
