type ProsType = {
    label?: String;
    type: "submit" | "reset" | "button" | undefined;
    className?: string;
    children?: React.ReactElement | React.ReactElement[];
    onClick?: () => void;
    setIsHovered?: React.Dispatch<React.SetStateAction<boolean>>;
};

function Button({
    label,
    type,
    className,
    children,
    onClick,
    setIsHovered,
}: ProsType) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const hanldeMouseEnter = () => {
        if (setIsHovered) {
            setIsHovered(true);
        }
    };
    const handleMouseLeave = () => {
        if (setIsHovered) {
            setIsHovered(false);
        }
    };
    return (
        <>
            <button
                onMouseEnter={hanldeMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={className}
                type={type}
                onClick={handleClick}
            >
                {label}
                {children}
            </button>
        </>
    );
}

export default Button;
