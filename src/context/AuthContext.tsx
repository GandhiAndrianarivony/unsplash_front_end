import { createContext, useState } from "react";
import { ChildrenType, UserType } from "../types";
import { isAuthTokenExpired } from "../utils/helpers";

const TOKEN_AUTH = localStorage.getItem("tokenAuth");

export type ContextType = {
    user: UserType;
    isAuthenticated: boolean;
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuthUser: () => boolean;
    token: string | null;
};

const INITIAL_USER = {
    username: "",
    email: "",
};

const INITIAL_STATE = {
    user: INITIAL_USER,
    isAuthenticated: false,
    setUser: () => {},
    setIsAuthenticated: () => {},
    checkAuthUser: () => false as boolean,
    token: null,
};

// Create context
export const AuthContext = createContext<ContextType>(INITIAL_STATE);

// Define the provider
export default function AuthContextProvider({ children }: ChildrenType) {
    const [user, setUser] = useState<UserType>(INITIAL_USER);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkAuthUser = (): boolean => {
        if (TOKEN_AUTH && isAuthTokenExpired(TOKEN_AUTH)) {
            localStorage.removeItem("tokenAuth");
            return false;
        } else if (TOKEN_AUTH) {
            setIsAuthenticated(true);
            return true;
        } else {
            return false;
        }
    };

    const value = {
        user,
        isAuthenticated,
        setUser,
        setIsAuthenticated,
        checkAuthUser,
        token: TOKEN_AUTH,
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
