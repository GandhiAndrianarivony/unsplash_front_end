import { gql } from "@apollo/client";

const UPLOAD_IMAGE = gql`
    mutation ($file: Upload!) {
        uploadFile(file: $file) 
    }
`;

export default UPLOAD_IMAGE;