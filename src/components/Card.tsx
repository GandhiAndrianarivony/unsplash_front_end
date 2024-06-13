import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";

type PropsType = {
    imageSource?: string;
    cardTitle?: string;
    isChecked?: boolean;
    isAdded?: boolean;
    onAdd: () => void;
    onRemove: () => void;
};

const env = import.meta.env;
const imageURI = env.VITE_BACKEND_IP_ADDRESS;

const imgSrc = `http://${imageURI}:${env.VITE_BACKEND_PORT}/media/a1922f08-b564-4b52-a34f-e575e9d48c98.JPEG`;

const Card = ({
    imageSource = imgSrc,
    cardTitle = "",
    isChecked = false,
    onAdd,
    onRemove,
}: PropsType) => {
    const [isExist, setIsExist] = useState(isChecked);

    useEffect(() => {
        setIsExist(isChecked);
    }, [isChecked]);

    return (
        <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
            <div>
                <img
                    src={`http://${imageURI}:${env.VITE_BACKEND_PORT}${imageSource}`}
                    alt=""
                    className="transition-transform group-hover:scale-110 duration-200 object-cover bg-no-repeat h-[200px] w-[172px]"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-white p-4">
                    <h3 className="font-semibold">{cardTitle}</h3>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 p-4">
                {isExist ? (
                    <div>
                        <MdOutlineIndeterminateCheckBox
                            color="lightgreen"
                            size={"32px"}
                            className="hover:cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                onRemove();
                                setIsExist(false)
                            }}
                        />
                    </div>
                ) : (
                    <div>
                        <IoMdAdd
                            color="white"
                            size={"32px"}
                            className="hover:cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                onAdd();
                                setIsExist(true)
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
