type NodeType = {
    aiDescription: string;
    baseUrl: string;
    blurhashCode: string;
    category: string;
    createdAt: string;
    description: string;
    fileName: string;
    id: string;
};

type PropsType = {
    item: { node: NodeType };
};

function ImageItem({ item }: PropsType) {
    const env = import.meta.env;
    const imageURI = env.VITE_BACKEND_IP_ADDRESS;

    return (
        <>
            <img
                src={`http://${imageURI}:${env.VITE_BACKEND_PORT}${item.node.baseUrl}`}
                alt=""
                className="w-full"
            />
        </>
    );
}

export default ImageItem;
