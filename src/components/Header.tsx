import SearchBar from "./form/SearchBar";
import ListMenu from "./menu/ListMenu";

function Header() {
    
    return (
        <div className="flex fixed w-[100%] bg-white">
            <div className="flex-1">
                <SearchBar />
            </div>
            <div className="mt-4 mr-2">
                <ListMenu/>
            </div>
        </div>
    );
}

export default Header;
