function UserProfile({className = "", profile = "" }) {
    const env = import.meta.env;
    const imageURI = env.VITE_BACKEND_IP_ADDRESS;
    const uri = `http://${imageURI}:${env.VITE_BACKEND_PORT}${profile}`;

    return (
        <>
            <img className={className} src={uri} alt="" />
        </>
    );
}

export default UserProfile;
