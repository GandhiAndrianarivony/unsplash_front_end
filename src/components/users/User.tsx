import { useQuery } from "@apollo/client";
import GET_CURRENT_USER from "../../lib/graphql/queries/getCurrentUser";
import UserProfile from "./UserProfile";

type PropsType = {
    authToken: string | null;
    setIsIconClicked?: () => void;
    setUsername?: (e: any) => void;
};

function User({ authToken, setIsIconClicked, setUsername }: PropsType) {
    const { loading, error, data } = useQuery(GET_CURRENT_USER, {
        context: {
            headers: {
                authorization: `JWT ${authToken}`,
            },
        },
    });

    if (loading) return "Loading ...";
    if (error) return `Error: ${error}`;

    return (
        <UserProfile
            setIsIconClicked={() => {
                if (setIsIconClicked && setUsername) {
                    setIsIconClicked();
                    setUsername(data.getCurrentUser.username);
                }
            }}
            className="w-[36px] h-[36px] rounded-full cursor-pointer"
            profile={data.getCurrentUser.profile.baseUrl}
        />
    );
}

export default User;
