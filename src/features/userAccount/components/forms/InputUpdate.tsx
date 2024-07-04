import { FieldErrors, UseFormRegister } from "react-hook-form";
import { generateRandomString } from "../../../../utils/helpers";

type PropsType = {
    register: UseFormRegister<any>;
    label: string;
    field: string;
    errors: FieldErrors<any>;
    type?: string;
};

const InputUpdate = ({
    register,
    label,
    field,
    errors,
    type = "text",
}: PropsType) => {
    const clsName =
        "border-2 rounded-md text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600";
    ("border-2 rounded-md text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600");
    const id = generateRandomString();

    const renderTextarea = () => (
        <textarea className={clsName} {...register(field)} />
    );
    const renderInput = () => (
        <input className={clsName} type={type} {...register(field)} />
    );

    return (
        <>
            <label className="block text-base my-2 font-bold" htmlFor={id}>
                {label}
            </label>
            {type === "text" ? renderInput() : renderTextarea()}
            {errors[field] && (
                <p className="text-red-500">{`${errors[field]?.message}`}</p>
            )}
        </>
    );
};

export default InputUpdate;
