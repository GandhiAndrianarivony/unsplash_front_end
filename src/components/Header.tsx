import { useEffect, useState } from "react";
import SearchBar from "./form/SearchBar";
import ListMenu from "./menu/ListMenu";
import User from "./users/User";
import { useAuth } from "../hooks/useAuth";

type PropsType = {
    setText?: React.Dispatch<React.SetStateAction<string | null>>;
    setSearchData?: React.Dispatch<any>;
    text?: string | null;
    isIconClicked?: boolean | null;
    setIsIconClicked?: (e: boolean) => void;
    className?: string;
};

function Header({
    setSearchData,
    setText,
    text,
    isIconClicked,
    setIsIconClicked,
    className = "pb-[80px]",
}: PropsType) {
    const [username, setUsername] = useState("");

    const { isAuthenticated, checkAuthUser, token } = useAuth();

    useEffect(() => {
        checkAuthUser();
    }, [token, isAuthenticated]);

    return (
        <div className={className}>
            <div className="flex fixed w-[100%] bg-white z-10">
                <div className="flex-1 mb-1">
                    <SearchBar
                        text={text}
                        setSearchData={setSearchData}
                        setText={setText}
                    />
                </div>
                <div className="pt-4">
                    <ListMenu
                        username={username}
                        isIconClicked={isIconClicked}
                        setIsIconClicked={() => {
                            if (setIsIconClicked) {
                                setIsIconClicked(false);
                            }
                        }}
                    />
                </div>
                {isAuthenticated ? (
                    <div
                        className="pt-3 mr-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <User
                            setUsername={setUsername}
                            setIsIconClicked={() => {
                                if (setIsIconClicked) {
                                    setIsIconClicked(!isIconClicked);
                                }
                            }}
                            authToken={token}
                        />
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default Header;
