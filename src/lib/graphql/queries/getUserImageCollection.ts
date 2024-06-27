import { gql } from "@apollo/client";

export const GET_USER_IMAGE_COLLECTION = gql`
    query GetUserOwnedCollection {
        getCollections {
            edges {
                node {
                    name
                    id
                    images {
                        id
                        image {
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
                        collection {
                            pk
                        }
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
