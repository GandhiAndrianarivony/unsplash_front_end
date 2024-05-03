import { useQuery } from "@apollo/client";
import GET_CURRENT_USER from "../../graphql/queries/getCurrentUser";
import UserProfile from "./UserProfile";

type PropsType = {
    authToken: string | null;
};

function User({ authToken }: PropsType) {
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
            className="w-[36px] h-[36px] rounded-full cursor-pointer"
            profile={data.getCurrentUser.profile.baseUrl}
        />
    );
}

export default User;
