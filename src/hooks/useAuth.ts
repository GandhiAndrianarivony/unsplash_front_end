import { useContext } from "react"
import { AuthContext, ContextType } from "../context/AuthContext"

export const useAuth = (): ContextType => {
    return useContext(AuthContext)
}