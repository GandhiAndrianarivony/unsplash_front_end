import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../../lib/graphql/queries";
import UserProfile from "./UserProfile";
import { useEffect } from "react";
import { set } from "react-hook-form";

type PropsType = {
    authToken: string | null;
    setIsIconClicked?: () => void;
    setUsername?: (e: any) => void;
    profileUpdated?: boolean;
    setProfileUpdated?: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
};

function User({
    authToken,
    setIsIconClicked,
    setUsername,
    profileUpdated,
    setProfileUpdated = () => {},
    className = "w-[36px] h-[36px] rounded-full cursor-pointer",
}: PropsType) {
    const { loading, error, data, refetch } = useQuery(GET_CURRENT_USER, {
        context: {
            headers: {
                authorization: `JWT ${authToken}`,
            },
        },
    });

    if (loading) return "Loading ...";
    if (error) return `Error: ${error}`;

    useEffect(() => {
        if (profileUpdated) {
            refetch();
            setProfileUpdated(!profileUpdated);
        }
    }, [profileUpdated]);

    return (
        <UserProfile
            setIsIconClicked={() => {
                if (setIsIconClicked && setUsername) {
                    setIsIconClicked();
                    setUsername(data.getCurrentUser.username);
                }
            }}
            className={className}
            profile={data.getCurrentUser.profile.baseUrl}
        />
    );
}

export default User;
