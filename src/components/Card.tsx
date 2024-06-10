type PropsType = {
    imageSource?: string;
    cardTitle?: string;
    cardDescription?: string;
};

const env = import.meta.env;
const imageURI = env.VITE_BACKEND_IP_ADDRESS;

const imgSrc = `http://${imageURI}:${env.VITE_BACKEND_PORT}/media/a1922f08-b564-4b52-a34f-e575e9d48c98.JPEG`;

const Card = ({
    imageSource = imgSrc,
    cardTitle = "",
    cardDescription = "",
}: PropsType) => {
    return (
        <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
            <img
                src={imageSource}
                alt=""
                className="transition-transform group-hover:scale-110 duration-200"
            />
            <div className="absolute inset-0 items-end bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-white p-4">
                    <h1 className="font-bold text-xl">{cardTitle}</h1>
                    <p>
                        This is the card description. sdjfaskfdoi asfl
                        ajflkasjfl jasdflkjas fjasdlkfjsdlkfj
                        lskdjflkasdjflkajdslfjdlkf jjadljf
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
