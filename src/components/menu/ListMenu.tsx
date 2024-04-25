import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";

import Button from "../ui/Button";
import Menu from "./Menu";
import { useState } from "react"; 
import { logout } from "../../features/authentication/utils/helpers";

function ListMenu() {
    // Setting up text menu and its styles
    const authToken = localStorage.getItem("tokenAuth");

    const textMenu: [string, string, (() => void)?][] = [
        ["Explore", "#"],
        ["Advertise", "#"],
        !authToken
            ? ["Log in", "/loginPage"]
            : ["Log out", "/loginPage", logout],
    ];
    const textMenuStyle =
        "text-gray-500 hover:text-gray-700 font-normal px-3 py-2";
    const textMenuBlockStyle =
        "block text-gray-500 hover:text-gray-700 px-3 font-normal py-2";

    // Setting up button menu and its styles
    const buttonMenu: [string, string][] = [["Submit a photo", "/upload_image"]];
    const buttonMenuStyle =
        "text-gray-500 hover:text-gray-700 px-2 py-2 ml-2 font-normal border-2 border-gray-400 hover:border-gray-800 rounded-lg";
    const buttonMenuBlockStyle =
        "block text-gray-500 hover:text-gray-700 px-2 py-2 ml-2 mb-2 font-normal border-2 border-gray-400 hover:border-gray-800 rounded-lg";

    const [menuOpen, setMenuOpen] = useState(false);

    let menuResponsive = <p></p>;
    if (menuOpen) {
        menuResponsive = (
            <div className="relative">
                <div className="absolute right-0">
                    <Menu
                        responsivenessStyle="block md:hidden w-40 bg-gray-100 rounded-md px-1 py-1"
                        textMenu={textMenu}
                        textMenuStyle={textMenuBlockStyle}
                        buttonMenu={buttonMenu}
                        buttonMenuStyle={buttonMenuBlockStyle}
                    />
                </div>
            </div>
        );
    }

    return (
        <div>
            <Button
                type="button"
                className="md:hidden ml-4"
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                {menuOpen ? <MdCancel /> : <IoMdMenu />}
            </Button>
            <Menu
                responsivenessStyle="hidden md:block ml-[20px] mr-[20px]"
                textMenu={textMenu}
                textMenuStyle={textMenuStyle}
                buttonMenu={buttonMenu}
                buttonMenuStyle={buttonMenuStyle}
            />
            {menuResponsive}
        </div>
    );
}

export default ListMenu;
