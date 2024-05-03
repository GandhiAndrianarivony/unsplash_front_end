import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";

import Button from "../ui/Button";
import { useState } from "react";
import TextMenu from "./TextMenu";
import ButtonMenu from "./ButtonMenu";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/authentication/utils/helpers";

type PropsType = {
    isIconClicked?: boolean;
    setIsIconClicked?: React.Dispatch<React.SetStateAction<boolean>>;
    username?: string;
};

function ListMenu({
    isIconClicked = false,
    setIsIconClicked,
    username = "deric",
}: PropsType) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    // CSS of the menu
    const textMenuStyle =
        "text-gray-500 hover:text-gray-700 font-normal px-3 py-2";
    const textMenuBlockStyle =
        "block text-gray-500 hover:text-gray-700 px-3 font-normal py-2";
    const buttonMenuStyle =
        "text-gray-500 hover:text-gray-700 px-2 py-2 ml-2 font-normal border-2 border-gray-400 hover:border-gray-800 rounded-lg";
    const buttonMenuBlockStyle =
        "block text-gray-500 hover:text-gray-700 px-2 py-2 mr-2 ml-2 mb-2 font-normal border-2 border-gray-400 hover:border-gray-800 rounded-lg";
    const userIconMenuClassName = "pb-3 text-gray-500 hover:text-gray-800";

    // Menu used in case of small screen
    let menuResponsive = <p></p>;
    if (menuOpen) {
        menuResponsive = (
            <div className="relative">
                <div className="absolute right-0 mt-5 mr-4">
                    <div
                        className={`block md:hidden w-40 bg-gray-100 rounded-md px-1 py-1`}
                    >
                        <TextMenu className={textMenuBlockStyle} />
                        <ButtonMenu className={buttonMenuBlockStyle} />
                    </div>
                </div>
            </div>
        );
    }

    let userIconMenu = <p></p>;
    if (isIconClicked) {
        userIconMenu = (
            // <div className="relative">
            <div className="absolute w-48 right-4 mt-[48px] rounded-lg border-2 border-gray-400 hover:border-gray-500 bg-white">
                <div className="px-2 py-2">
                    <div className={userIconMenuClassName}>
                        <Link to="#">View Profile</Link>
                    </div>
                    <div className={userIconMenuClassName}>
                        <Link to="#">Stats</Link>
                    </div>
                    <div className={userIconMenuClassName}>
                        <Link to="#">Account setting</Link>
                    </div>
                    <hr className="mb-2"/>
                    <div className={userIconMenuClassName}>
                        <Link
                            to="/"
                            onClick={() => {
                                if (setIsIconClicked) {
                                    setIsIconClicked(false);
                                }
                                logout();
                                navigate("/");
                            }}
                        >
                            Logout @{username}
                        </Link>
                    </div>
                </div>
            </div>
            // </div>
        );
    }

    return (
        <div className="flex justify-center">
            <Button
                type="button"
                className="md:hidden ml-4 mr-4 mt-1"
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                {menuOpen ? <MdCancel /> : <IoMdMenu />}
            </Button>

            {/* Menu display in case of md screen */}
            <div className={`hidden md:block ml-[20px] mr-[20px]`}>
                <TextMenu className={textMenuStyle} />
                <ButtonMenu className={buttonMenuStyle} />
            </div>
            {menuResponsive}
            {userIconMenu}
        </div>
    );
}

export default ListMenu;
