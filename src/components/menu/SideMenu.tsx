import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { useState } from "react";

type PropsType = {
    display?: string;
    isResponsive?: boolean;
};

function SideMenu({ display, isResponsive = false }: PropsType) {
    // Setting up text menu and its styles
    const textMenu: [string, string][] = [
        ["Explore", "#"],
        ["Advertise", "#"],
        ["Log in", "#"],
    ];
    const textMenuStyle =
        " text-gray-500 hover:text-gray-700 px-3 font-normal py-2";

    // Setting up button menu and its styles
    const buttonMenu: [string, string][] = [["Submit a photo", "#"]];
    const buttonMenuStyle =
        "text-gray-500 hover:text-gray-700 px-2 py-2 ml-2 font-normal border-2 border-gray-400 hover:border-gray-800 rounded-lg ";

    // const [menuOpen, setMenuOpen] = useState(false);
    // const [menuIcon, setMenuIcon] = useState("menu.svg");

    // const responsiveCls = isResponsive
    //     ? `absolute right-0 mt-2 shadow-md rounded-md p-4 w-48 bg-gray-200 ${
    //           menuOpen ? "block" : "hidden"
    //       }`
    //     : "hidden md:flex";

    return (
        // <div className={isResponsive ? "relative" : ""}>
        //     {isResponsive ? (
        //         <Button
        //             type="button"
        //             className="block md:hidden px-4"
        //             onClick={() => {
        //                 setMenuOpen(!menuOpen);
        //                 setMenuIcon(menuOpen ? "menu.svg" : "close.svg");
        //             }}
        //         >
        //             <img src={menuIcon} alt="" />
        //         </Button>
        //     ) : (
        //         ""
        //     )}

        // <div className={responsiveCls}>

        <div>
            <Button type="button" className="block md:hidden">
                <p>Button</p>
            </Button>
            <div className="hidden md:block">
                {textMenu.map((item) => {
                    return (
                        <Link
                            className={textMenuStyle + " " + display}
                            key={item[0]}
                            to={item[1]}
                        >
                            {item[0]}
                        </Link>
                    );
                })}
                {buttonMenu.map((item) => (
                    <Link
                        to={item[1]}
                        key={item[0]}
                        className={buttonMenuStyle + " " + display}
                    >
                        {item[0]}
                    </Link>
                ))}
            </div>
        </div>
        // </div>
    );
}

export default SideMenu;
