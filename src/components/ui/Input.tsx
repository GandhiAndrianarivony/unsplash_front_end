type PropsType = {
    htmlFor: string;
    type: string;
    label?: string;
};

function Input({ htmlFor, type, label }: PropsType) {
    return (
        <>
            <label className="block text-base mb-2 mt-2" htmlFor={htmlFor}>
                {label}
            </label>
            <input
                className="border-2 rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                id={htmlFor}
                type={type}
            />
        </>
    );
}

export default Input;
