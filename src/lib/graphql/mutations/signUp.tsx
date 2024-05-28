import { gql } from "@apollo/client";

const CREATE_USER = gql`
    mutation CreateUser(
        $username: String!
        $email: String!
        $gender: GenderType!
        $location: String!
        $website: String!
        $bio: String!
        $interests: String!
        $phoneNumber: String!
        $password: String!
    ) {
        createUser(
            input: {
                username: $username
                email: $email
                gender: $gender
                location: $location
                website: $website
                bio: $bio
                interests: $interests
                phoneNumber: $phoneNumber
                password: $password
            }
        ) {
            username
            email
            gender
            location
            website
            bio
            interests
            phoneNumber
        }
    }
`;

export default CREATE_USER;
