import { FaRegHeart } from "react-icons/fa";
import { useMutation } from "@apollo/client";

import { useAuth } from "../../hooks/useAuth";
import { LIKE_IMAGE, UNLIKE_IMAGE } from "../../lib/graphql/mutations/index";
import { useState } from "react";

type PropsType = {
    imageId: string;
    isLiked: boolean;
};

const Like = ({ imageId, isLiked }: PropsType) => {
    const { token } = useAuth();
    const [liked, setLiked] = useState(isLiked);

    // Like Image
    const context = {
        context: {
            headers: {
                authorization: `JWT ${token}`,
            },
        },
    };
    const [likeImage, {}] = useMutation(LIKE_IMAGE, context);
    const [unlikeImage, {}] = useMutation(UNLIKE_IMAGE, context);

    const handleLike = async () => {
        try {
            if (!liked) {
                await likeImage({ variables: { imageId } });
            } else {
                await unlikeImage({ variables: { imageId } });
            }
            setLiked(!liked);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div onClick={() => handleLike()}>
            <FaRegHeart color={`${liked && token ? "red" : ""}`} size={"20px"} />
        </div>
    );
};

export default Like;
