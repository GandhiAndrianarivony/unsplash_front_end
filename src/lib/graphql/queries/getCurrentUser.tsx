import { gql } from "@apollo/client";

const GET_CURRENT_USER = gql`
    query GetCurrentUser {
        getCurrentUser {
            bio
            email
            gender
            id
            location
            phoneNumber
            username
            website
            profile {
                baseUrl
            }
        }
    }
`;

export default GET_CURRENT_USER;
