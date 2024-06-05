import { createContext, useState } from "react";
import { ChildrenType, UserType } from "../types";
import { isAuthTokenExpired } from "../utils/helpers";

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
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserType>(INITIAL_USER);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkAuthUser = (): boolean => {
        const TOKEN_AUTH = localStorage.getItem("tokenAuth");

        if (TOKEN_AUTH && isAuthTokenExpired(TOKEN_AUTH)) {
            localStorage.removeItem("tokenAuth");
            setToken(null);
            return false;
        } else if (TOKEN_AUTH) {
            setIsAuthenticated(true);
            setToken(TOKEN_AUTH);
            return true;
        } else {
            setToken(null);
            return false;
        }
    };

    const value = {
        user,
        isAuthenticated,
        setUser,
        setIsAuthenticated,
        checkAuthUser,
        token: token,
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
