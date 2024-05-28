import { gql } from "@apollo/client";

const GET_CURRENT_USER = gql`
    query GetCurrentUser {
        getCurrentUser {
            profile {
                baseUrl
            }
            username
        }
    }
`;

export default GET_CURRENT_USER;
