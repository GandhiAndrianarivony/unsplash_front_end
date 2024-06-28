import { useState } from "react";
import Header from "../components/Header";
import UserProfileLayout from "../layouts/UserProfileLayout";

function ViewProfilePage() {
    const [text, setText] = useState<string | null>("");
    const [isIconClicked, setIsIconClicked] = useState(false);
    return (
        <div className="pb-10" onClick={() => setIsIconClicked(false)}>
            <Header
                isIconClicked={isIconClicked}
                setIsIconClicked={setIsIconClicked}
                setText={setText}
                text={text}
                className=""
            />
            <UserProfileLayout />
        </div>
    );
}

export default ViewProfilePage;
