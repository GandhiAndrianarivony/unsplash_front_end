import { gql } from "@apollo/client";

const GET_IMAGES = gql`
    query GetListOfImages {
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
                    user {
                        profile {
                            baseUrl
                        }
                        username
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
