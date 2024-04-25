import { useState } from "react";
import { Blurhash } from "react-blurhash";

type ImageUrlType = {
    height: number;
    width: number;
};

type NodeType = {
    aiDescription: string;
    baseUrl: string;
    blurhashCode: string;
    category: string;
    createdAt: string;
    description: string;
    fileName: string;
    id: string;
    imageUrl?: ImageUrlType;
    user: { profile: { baseUrl: string }, username: string };
};

export type PropsType = {
    item: { node: NodeType };
    className?: string;
};

function ImageItem({ item, className = "" }: PropsType) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const env = import.meta.env;
    const imageURI = env.VITE_BACKEND_IP_ADDRESS;

    return (
        <>
            {!isImageLoaded && (
                <Blurhash
                    className="w-full bg-black"
                    hash={item.node.blurhashCode}
                    width={item.node.imageUrl?.width}
                    height={item.node.imageUrl?.height}
                />
            )}
            <img
                src={`http://${imageURI}:${env.VITE_BACKEND_PORT}${item.node.baseUrl}`}
                alt=""
                className={className}
                onLoad={() => setIsImageLoaded(!isImageLoaded)}
                onError={() => setIsImageLoaded(false)}
            />
        </>
    );
}

export default ImageItem;
