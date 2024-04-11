import { PropsType } from "./type";

function LoginInput(props: PropsType) {
    
    const content = (
        <>
            <label className="block text-base mb-2 mt-2" htmlFor={props.field}>
                {props.field}
            </label>
            <input
                className="border-2 rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                id={props.field}
                type="text"
            />
        </>
    );

    return content;
}

export default LoginInput;
