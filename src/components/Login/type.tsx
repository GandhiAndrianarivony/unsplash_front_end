export type PropsType = {
    field: string;
    loginData: LoginDataType;
    setLoginData: React.Dispatch<React.SetStateAction<LoginDataType>>;
};

export type LoginDataType = {
    email: string;
    password: string;
};
