import { gql } from "@apollo/client";

const UPLOAD_PROFIL_IMAGE = gql`
    mutation ($file: Upload!) {
        uploadFile(file: $file)
    }
`;
 
export default UPLOAD_PROFIL_IMAGE;