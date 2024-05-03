import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/authentication/utils/helpers";

type PropsType = {
    className?: string;
};

function TextMenu({ className = "" }: PropsType) {
    const navigate = useNavigate();

    const authToken = localStorage.getItem("tokenAuth");

    return (
        <>
            <Link className={className} to="#">
                Explore
            </Link>
            <Link className={className} to="#">
                Advertise
            </Link>
            <Link
                className={className}
                to="#"
                onClick={() => {
                    if (authToken) {
                        logout();
                    } else {
                        navigate("/loginPage");
                    }
                }}
            >
                {!authToken ? "Login" : "Logout"}
            </Link>
        </>
    );
}

export default TextMenu;
