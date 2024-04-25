import SearchBar from "./form/SearchBar";
import ListMenu from "./menu/ListMenu";

function Header() {
    return (
        <div className="pb-[80px]">
            <div className="flex fixed w-[100%] bg-white z-50 pb-2">
                <div className="flex-1">
                    <SearchBar />
                </div>
                <div className="mt-4 mr-2">
                    <ListMenu />
                </div>
            </div>
        </div>
    );
}

export default Header;
