type PropsType = {
    isCollectionOpen: boolean;
    setIsCollectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactElement;
};
const ImageCollection = ({
    isCollectionOpen,
    setIsCollectionOpen,
    children,
}: PropsType) => {
    const collections = [
        "Collection 1",
        "Collection 2",
        "Collection 3",
        "Collection 4",
        "Collection 5",
        "Collection 6",
    ];
    return (
        <div
            className={`fixed inset-0 z-20 flex justify-center items-center ${
                isCollectionOpen ? "visible" : "invisible"
            }`}
            onClick={() => {
                setIsCollectionOpen(false);
            }}
        >
            <div
                className="bg-gray-200 flex rounded-lg w-1/2 h-1/2"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex-1 flex justify-center items-center">
                    <div className="max-w-lg flex justify-center items-center">
                        <div className=" bg-black text-white text-center p-2">
                            Collection 1
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default ImageCollection;
