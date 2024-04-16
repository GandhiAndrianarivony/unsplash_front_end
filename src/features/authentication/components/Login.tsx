import PasswordInput from "../../../components/ui/PasswordInput";
import TextInput from "../../../components/ui/TextInput";

function Login() {
    return (
        <div>
            <form>
                <TextInput label="Username" />
                <PasswordInput label="Password" />
            </form>
        </div>
    );
}

export default Login;
