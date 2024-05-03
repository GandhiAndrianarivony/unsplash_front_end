import { Link, useNavigate } from "react-router-dom";

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
            {!authToken ? (
                <Link
                    className={className}
                    to="/loginPage"
                    onClick={() => navigate("/loginPage")}
                >
                    Login
                </Link>
            ) : (
                ""
            )}
        </>
    );
}

export default TextMenu;
