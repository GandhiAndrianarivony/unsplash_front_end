import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";

import Button from "../ui/Button";
import { useState } from "react";
import TextMenu from "./TextMenu";
import ButtonMenu from "./ButtonMenu";

function ListMenu() {
    const textMenuStyle =
        "text-gray-500 hover:text-gray-700 font-normal px-3 py-2";
    const textMenuBlockStyle =
        "block text-gray-500 hover:text-gray-700 px-3 font-normal py-2";

    const buttonMenuStyle = "text-gray-500 hover:text-gray-700 px-2 py-2 ml-2 font-normal border-2 border-gray-400 hover:border-gray-800 rounded-lg";

    const buttonMenuBlockStyle =
        "block text-gray-500 hover:text-gray-700 px-2 py-2 ml-2 mb-2 font-normal border-2 border-gray-400 hover:border-gray-800 rounded-lg";

    const [menuOpen, setMenuOpen] = useState(false);

    let menuResponsive = <p></p>;
    if (menuOpen) {
        menuResponsive = (
            <div className="relative">
                <div className="absolute right-0 mt-4 mr-4">
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
            
            <div className={`hidden md:block ml-[20px] mr-[20px]`}>
                <TextMenu className={textMenuStyle} />
                <ButtonMenu className={buttonMenuStyle} />
            </div>
            {menuResponsive}
        </div>
    );
}

export default ListMenu;
