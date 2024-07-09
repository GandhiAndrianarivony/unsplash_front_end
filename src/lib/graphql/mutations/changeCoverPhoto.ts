import { gql } from "@apollo/client";

const CHANGE_COVER_PHOTO = gql`
    mutation ChangeCoverPhoto($file: Upload!) {
        changeUserCoverImage(file: $file) {
            errorMessage
            statusCode
            statusMessage
        }
    }
`;

export default CHANGE_COVER_PHOTO;