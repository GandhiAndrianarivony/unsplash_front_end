type ProsType = {
    label: String;
};

function Button({ label }: ProsType) {
    return (
        <>
            <button
                className="bg-black w-full mt-5 text-white px-2 py-2"
                type="submit"
            >
                {label}
            </button>
        </>
    );
}

export default Button;
