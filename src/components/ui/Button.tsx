type ProsType = {
    label?: String;
    type: "submit" | "reset" | "button" | undefined;
    className?: string;
    children?: React.ReactElement;
    onClick?: () => void;
};

function Button({ label, type, className, children, onClick }: ProsType) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
    return (
        <>
            <button className={className} type={type} onClick={handleClick}>
                {label}
                {children}
            </button>
        </>
    );
}

export default Button;
