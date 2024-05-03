import SignUpForm from "./SignUpForm";

function SignUp() {
    return (
        <div className="flex justify-center">
            <div className="w-96">
                <div className="text-center">
                    <h1 className="text-3xl block font-bold">Join Unsplash</h1>
                    <p>Welcome</p>
                </div>
                <SignUpForm/>
            </div>
        </div>
    );
}

export default SignUp;
