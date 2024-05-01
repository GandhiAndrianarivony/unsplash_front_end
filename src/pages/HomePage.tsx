import {useState } from "react";
import Header from "../components/Header";
import ImageList from "../components/images/ImageList";

function HomePage() {
    const [text, setText] = useState<string | null>("");
    const [searchedData, setSearchData] = useState<any>(null);

    return (
        <div className="pb-10">
            <Header
                setSearchData={setSearchData}
                setText={setText}
                text={text}
            />
            <ImageList searchedData={searchedData} />
        </div>
    );
}

export default HomePage;
