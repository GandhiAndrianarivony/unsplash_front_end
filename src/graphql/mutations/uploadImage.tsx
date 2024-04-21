import { gql } from "@apollo/client";

const UPLOAD_IMAGE = gql`
    mutation UploadImageFile($file: Upload!) {
        uploadFile(file: $file) 
    }
`;

export default UPLOAD_IMAGE;