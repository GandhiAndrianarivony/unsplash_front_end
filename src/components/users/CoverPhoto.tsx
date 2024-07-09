import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../../lib/graphql/queries";

type PropsType = {
    setCoverPhotoUpdated: React.Dispatch<React.SetStateAction<boolean>>;
    coverPhotoUpdated: boolean;
};

const CoverPhoto = ({ setCoverPhotoUpdated, coverPhotoUpdated }: PropsType) => {
    const { token } = useAuth();
    const { loading, error, data, refetch } = useQuery(GET_CURRENT_USER, {
        context: {
            headers: {
                authorization: `JWT ${token}`,
            },
        },
    });

    if (loading) return "Loading ...";
    if (error) return `Error: ${error}`;

    const env = import.meta.env;
    const imageURI = env.VITE_BACKEND_IP_ADDRESS;
    const coverPhoto = data?.getCurrentUser.coverPhoto.baseUrl;
    const uri = `http://${imageURI}:${env.VITE_BACKEND_PORT}${coverPhoto}`;

    useEffect(() => {
        if (coverPhotoUpdated) {
            refetch()
            setCoverPhotoUpdated(!coverPhotoUpdated);
        }
    }, [coverPhotoUpdated]);

    return (
        <div>
            <img
                className="h-96 w-full object-cover rounded-b"
                src={uri}
                alt="cover"
            />
        </div>
    );
};

export default CoverPhoto;
