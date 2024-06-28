import { gql } from "@apollo/client";

const AUTHENTICATE_USER = gql`
    mutation LoginUser($username: String!, $password: String!) {
        tokenAuth(password: $password, username: $username) {
            success
            token {
                token
                payload {
                    exp
                    origIat
                    username
                }
            }
        }
    }
`;

export default AUTHENTICATE_USER;

