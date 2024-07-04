import { gql } from "@apollo/client";

const UPLOAD_PROFIL_IMAGE = gql`
    mutation UploadUserProfile($file: Upload!) {
        uploadUserProfileImage(file: $file)
    }
`;

export default UPLOAD_PROFIL_IMAGE;
