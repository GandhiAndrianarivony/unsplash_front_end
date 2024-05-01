import { Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";

import Button from "../ui/Button";
import Input from "../ui/Input";
import GET_SEARCH_IMAGES from "../../graphql/queries/getSearchImageList";

import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { useEffect } from "react";

type PropsType = {
    setText?: React.Dispatch<React.SetStateAction<string | null>>;
    setSearchData?: React.Dispatch<any>;
    text?: string | null;
};

function SearchBar({ setSearchData, setText, text }: PropsType) {
    // Query being used based on user event (-> onSubmit)
    const [getSearchImageList, { loading, error, data }] =
        useLazyQuery(GET_SEARCH_IMAGES);

    // Hanlde form submission
    const handleClick = () => {
        getSearchImageList({
            variables: { search: text },
        });
    };

    useEffect(() => {
        if (data && setSearchData) {
            setSearchData(data.searches);
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;

    return (
        <>
            <div className="relative">
                <div className="flex">
                    <div className="pt-2">
                        <Link
                            to="/"
                            onClick={() => {
                                if (setSearchData) {
                                    setSearchData(null);
                                }
                                if (setText) {
                                    setText("");
                                }
                            }}
                        >
                            <FaHome size={"2.5rem"} />
                        </Link>
                    </div>
                    <div className="w-full">
                        <Input
                            className="w-full border border-gray-300 rounded-full focus:outline-gray-300 h-[2.5rem] px-[2.5rem] ml-2"
                            type="search"
                            arial_label="search-image"
                            value={text}
                            onChange={(value) => {
                                if (setText) {
                                    setText(value);
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleClick();
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="absolute top-4 left-0 ml-[60px]">
                    <Button
                        type="button"
                        className="rounded-full"
                        onClick={() => handleClick()}
                    >
                        <CiSearch size={"1.5rem"} />
                    </Button>
                </div>
            </div>
        </>
    );
}

export default SearchBar;
