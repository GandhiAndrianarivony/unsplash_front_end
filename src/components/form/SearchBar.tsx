import Button from "../ui/Button";
import Input from "../ui/Input";

import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

function SearchBar() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Search Image");
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="relative">
                    <div className="flex ">
                        <div className="pt-2">
                            <FaHome size={"2.5rem"} />
                        </div>
                        <div className="w-full">
                            <Input
                                className="w-full border border-gray-300 rounded-full focus:outline-gray-300 h-[2.5rem] px-[2.5rem] ml-2"
                                type="search"
                                arial_label="search-image"
                            />
                        </div>
                    </div>
                    <div className="absolute top-2 left-0 ml-[50px]">
                        <Button type="submit" className="rounded-full">
                            <CiSearch size={"2.5rem"} />
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SearchBar;
