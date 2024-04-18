import { useState } from "react";
import { Link } from "react-router-dom";

function RightMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuIcon, setMenuIcon] = useState("menu.svg");

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setMenuIcon(menuOpen ? "menu.svg" : "close.svg");
    };

    const authToken: string | null = localStorage.getItem("tokenAuth");
    const loginText = !authToken ? (
        <Link
            to="/login"
            className="block text-gray-500 hover:text-gray-700 px-3 font-normal py-2"
        >
            Log in
        </Link>
    ) : (
        ""
    );

    const mainContent = (
        <div className="hidden md:flex space-x-4 pt-2 px-4">
            <Link
                className="text-gray-500 hover:text-gray-700 px-3 font-normal py-2"
                aria-current="page"
                to="#"
            >
                Explore
            </Link>

            <Link
                className="text-gray-500 hover:text-gray-700 px-3 font-normal py-2"
                to="#"
            >
                Advertise
            </Link>

            {loginText}

            <Link
                to="/upload_image"
                className="text-gray-500 hover:text-gray-700 px-3 font-normal border-2 border-gray-400 hover:border-gray-800 rounded-lg py-2"
            >
                Submit a photo
            </Link>
        </div>
    );

    // When screen size change
    const responsiveContent = (
        <div className="relative">
            <button
                type="button"
                onClick={toggleMenu}
                className="block md:hidden px-4"
            >
                <img src={menuIcon} alt="" />
            </button>
            <div
                className={`absolute right-0 mt-2 shadow-md rounded-md p-4 w-48 bg-gray-200 ${
                    menuOpen ? "block" : "hidden"
                }`}
            >
                <Link
                    to="#"
                    className="block text-gray-500 hover:text-gray-700 px-3 font-normal py-2"
                >
                    Explore
                </Link>

                <Link
                    to="#"
                    className="block text-gray-500 hover:text-gray-700 px-3 font-normal py-2"
                >
                    Advertise
                </Link>

                {loginText}
                
                <Link
                    to="/upload_image"
                    className="block text-gray-500 hover:text-gray-700 px-3 font-normal border-2 border-gray-400 hover:border-gray-800 rounded-lg py-2"
                >
                    Submit a photo
                </Link>
            </div>
        </div>
    );

    return (
        <div>
            {mainContent}
            {responsiveContent}
        </div>
    );
}

export default RightMenu;
