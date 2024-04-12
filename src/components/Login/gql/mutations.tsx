import { gql } from "@apollo/client";

const LOGIN_MUTATION = gql`
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

export { LOGIN_MUTATION };
