import { generateRandomString } from "../../utils/helpers";

type PropsType = {
    type: string;
    label?: string;
    onChange?: (e: any) => void;
    onClick?: () => void;
    className?: string;
    arial_label: string;
};

function Input({
    type,
    label,
    onChange,
    onClick,
    className,
    arial_label,
}: PropsType) {
    const htmlFor = generateRandomString();

    return (
        <>
            <label className="block text-base mb-2 mt-2" htmlFor={htmlFor}>
                {label}
            </label>
            <input
                className={
                    className ??
                    "border-2 rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                }
                id={htmlFor}
                aria-label={arial_label}
                type={type}
                onChange={(e) => {
                    if (onChange) {
                        onChange(e.target.value);
                    }
                }}
                onClick={() => {
                    if (onClick) {
                        onClick();
                    }
                }}
            />
        </>
    );
}

export default Input;
