import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type PropsType = {
    className?: string;
};

function TextMenu({ className = "" }: PropsType) {
    const navigate = useNavigate();

    const { token } = useAuth();

    return (
        <>
            <Link className={className} to="#">
                Explore
            </Link>
            <Link className={className} to="#">
                Advertise
            </Link>
            {!token ? (
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
