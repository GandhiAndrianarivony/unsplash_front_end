import { gql } from "@apollo/client";

export const GET_USER_IMAGE_COLLECTION = gql`
    query MyQuery {
        getCollections {
            edges {
              node {
                name
                id
                images {
                  id
                  image {
                    pk
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
