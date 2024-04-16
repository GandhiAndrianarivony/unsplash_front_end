import { generateRandomString } from "../../utils/helpers";
import Input from "./Input";

type ProsType = {
    label: string;
};

function TextInput({ label }: ProsType) {
    const htmlFor: string = generateRandomString();
    return (
        <>
            <Input label={label} htmlFor={htmlFor} type="text" />
        </>
    );
}

export default TextInput;
