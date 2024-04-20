import RightMenu from "./Header/RightMenu";
import SearchBar from "./form/SearchBar";

function Header() {
    return (
        <div className="flex fixed w-[100%] bg-white">
            <div className="flex-1">
                <SearchBar />
            </div>
            <div>
                <RightMenu />
            </div>
        </div>
    );
}

export default Header;
