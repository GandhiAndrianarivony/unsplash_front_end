import { FieldErrors, UseFormRegister } from "react-hook-form";
import { generateRandomString } from "../../../../utils/helpers";

type PropsType = {
    register: UseFormRegister<any>;
    label: string;
    field: string;
    errors: FieldErrors<any>;
    type?: string;
    options?: { value: string; label: string }[];
};

const InputUpdate = ({
    register,
    label,
    field,
    errors,
    type = "text",
    options = [],
}: PropsType) => {
    const clsName =
        "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";
    const clsNameSelect = "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500";
    const id = generateRandomString();

    const renderTextarea = () => (
        <textarea className={clsName} {...register(field)} />
    );
    const renderInput = () => (
        <input className={clsName} type={type} {...register(field)} />
    );
    const renderSelect = () => (
        <select className={clsNameSelect} {...register(field)}>
            {options.map((option,index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
    return (
        <>
            <label className="block text-base my-2 font-bold" htmlFor={id}>
                {label}
            </label>
            {type === "textarea" ? renderTextarea(): type === "select" ? renderSelect(): renderInput()}
            {errors[field] && (
                <p className="text-red-500">{`${errors[field]?.message}`}</p>
            )}
        </>
    );
};

export default InputUpdate;
