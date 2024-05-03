import SearchBar from "./form/SearchBar";
import ListMenu from "./menu/ListMenu";
import User from "./users/User";

type PropsType = {
    setText?: React.Dispatch<React.SetStateAction<string | null>>;
    setSearchData?: React.Dispatch<any>;
    text?: string | null;
};

function Header({ setSearchData, setText, text }: PropsType) {
    const authToken = localStorage.getItem("tokenAuth");

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
                    <ListMenu />
                </div>
                <div className="pt-3 mr-4">
                    <User authToken={authToken} />
                </div>
            </div>
        </div>
    );
}
// mt-4 mr-2

export default Header;
