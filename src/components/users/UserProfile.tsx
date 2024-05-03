type PropsType = {
    // isIconClicked?: boolean;
    setIsIconClicked?: () => void;
    className: string;
    profile: string;
};

function UserProfile({
    setIsIconClicked,
    className = "",
    profile = "",
}: PropsType) {
    const env = import.meta.env;
    const imageURI = env.VITE_BACKEND_IP_ADDRESS;
    const uri = `http://${imageURI}:${env.VITE_BACKEND_PORT}${profile}`;

    return (
        <>
            <img
                className={className}
                src={uri}
                alt=""
                onClick={() => {
                    if (setIsIconClicked) {
                        setIsIconClicked();
                    }
                }}
            />
        </>
    );
}

export default UserProfile;
