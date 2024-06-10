type PropsType = {
    imageSource?: string;
    cardTitle?: string;
    cardDescription?: string;
    onClick: () => void;
};

const env = import.meta.env;
const imageURI = env.VITE_BACKEND_IP_ADDRESS;

const imgSrc = `http://${imageURI}:${env.VITE_BACKEND_PORT}/media/a1922f08-b564-4b52-a34f-e575e9d48c98.JPEG`;

const Card = ({
    imageSource = imgSrc,
    cardTitle = "",
    cardDescription = "",
    onClick,
}: PropsType) => {
    return (
        <div
            className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group hover:cursor-pointer"
            onClick={() => {
                onClick();
            }}
        >
            <div>
                <img
                    src={`http://${imageURI}:${env.VITE_BACKEND_PORT}${imageSource}`}
                    alt=""
                    className="transition-transform group-hover:scale-110 duration-200 object-cover bg-no-repeat"
                />
            </div>
            <div className="absolute inset-0 items-end bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-white p-4">
                    <h3 className="font-semibold">{cardTitle}</h3>
                </div>
            </div>
        </div>
    );
};

export default Card;
