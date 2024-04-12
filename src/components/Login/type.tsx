export type PropsType = {
    field: string;
    loginData: LoginDataType;
    setLoginData: React.Dispatch<React.SetStateAction<LoginDataType>>;
};

export type LoginDataType = {
    username: string;
    password: string;
};
