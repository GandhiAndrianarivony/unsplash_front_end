import { gql } from "@apollo/client";

const GET_SEARCH_IMAGES = gql`
    query GetSearchImagesList($search: String) {
        searches(search: $search) {
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
                    usersLike {
                        pk
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

export default GET_SEARCH_IMAGES;
