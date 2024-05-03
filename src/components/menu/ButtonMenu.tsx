import { Link } from "react-router-dom";

type PropsType = {
    className?: string;
};

function ButtonMenu({ className = "" }: PropsType) {
    return (
        <>
            <Link to="/upload_image" className={className}>
                Submit a photo
            </Link>
        </>
    );
}

export default ButtonMenu;
