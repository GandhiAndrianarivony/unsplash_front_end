import { Link, useNavigate } from "react-router-dom";
import UploadImage from "../../features/fileUpload/components/UploadImage";
import { useState } from "react";
import { isAuthTokenExpired } from "../../utils/helpers";

type PropsType = {
    className?: string;
    authToken?: string | null;
};

function ButtonMenu({ className = "", authToken }: PropsType) {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    return (
        <>
            <Link
                to=""
                className={className}
                onClick={() => {
                    if (!authToken || isAuthTokenExpired(authToken)) {
                        navigate("/loginPage");
                    } else {
                        setOpen(true);
                    }
                }}
            >
                Submit a photo
            </Link>
            <UploadImage
                authToken={authToken}
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
}

export default ButtonMenu;
