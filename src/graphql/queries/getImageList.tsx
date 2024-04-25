import { gql } from "@apollo/client";

const GET_IMAGES = gql`
    query MyQuery {
        getImages(first: 50) {
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
                    imageUrl {
                        height
                        width
                      }
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
