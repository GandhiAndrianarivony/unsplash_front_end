import { useState } from "react";
import Header from "../components/Header";

const Account = () => {
    const [text, setText] = useState<string | null>("");
    const [isIconClicked, setIsIconClicked] = useState(false);
    return (
        <div className="pb-10" onClick={() => setIsIconClicked(false)}>
            <Header
                isIconClicked={isIconClicked}
                setIsIconClicked={setIsIconClicked}
                setText={setText}
                text={text}
            />
        </div>
    );
};

export default Account;
