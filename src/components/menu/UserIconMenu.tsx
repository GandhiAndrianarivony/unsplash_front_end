import { Link } from "react-router-dom";

type PropsType = {
    userIconMenuClassName?: string;
    onLogout?: () => void;
    onClick?: (e: any) => void;
    username?: string;
};

function UserIconMenu({
    userIconMenuClassName,
    onLogout,
    onClick,
    username = "",
}: PropsType) {
    return (
        <div
            className="absolute w-48 right-4 mt-[48px] rounded-lg border-2 border-gray-400 hover:border-gray-500 bg-white"
            onClick={(e) => {
                if (onClick) {
                    onClick(e);
                }
            }}
        >
            <div className="px-2 py-2">
                <div className={userIconMenuClassName}>
                    <Link to="/profile">View Profile</Link>
                </div>
                <div className={userIconMenuClassName}>
                    <Link to="/account">Account settings</Link>
                </div>
                <hr className="mb-2" />
                <div className={userIconMenuClassName}>
                    <Link
                        to="/"
                        onClick={() => {
                            if (onLogout) {
                                onLogout();
                            }
                        }}
                    >
                        Logout @{username}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UserIconMenu;
