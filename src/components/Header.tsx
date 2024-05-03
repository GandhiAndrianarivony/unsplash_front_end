import { useState } from "react";
import SearchBar from "./form/SearchBar";
import ListMenu from "./menu/ListMenu";
import User from "./users/User";
import { isAuthTokenExpired } from "../utils/helpers";

type PropsType = {
    setText?: React.Dispatch<React.SetStateAction<string | null>>;
    setSearchData?: React.Dispatch<any>;
    text?: string | null;
    isIconClicked?: boolean | null;
    setIsIconClicked?: (e: boolean) => void;
};

function Header({
    setSearchData,
    setText,
    text,
    isIconClicked,
    setIsIconClicked,
}: PropsType) {
    const authToken = localStorage.getItem("tokenAuth");
    const [username, setUsername] = useState("");

    return (
        <div className="pb-[80px]">
            <div className="flex fixed w-[100%] bg-white z-50">
                <div className="flex-1">
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
                {!isAuthTokenExpired(authToken) ? (
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
                            authToken={authToken}
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
