import SearchBar from "./form/SearchBar";
import ListMenu from "./menu/ListMenu";

type PropsType = {
    setText?: React.Dispatch<React.SetStateAction<string | null>>;
    setSearchData?: React.Dispatch<any>;
    text?: string | null;
};

function Header({ setSearchData, setText, text }: PropsType) {
    return (
        <div className="pb-[80px]">
            <div className="flex fixed w-[100%] bg-white z-50 pb-2">
                <div className="flex-1">
                    <SearchBar
                        text={text}
                        setSearchData={setSearchData}
                        setText={setText}
                    />
                </div>
                <div className="mt-4 mr-2">
                    <ListMenu />
                </div>
            </div>
        </div>
    );
}

export default Header;
