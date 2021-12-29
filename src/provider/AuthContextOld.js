import { createContext } from "react";
export const AuthContextOld = createContext({
    isLogin: false,
    setLogin: () => {},
    token: null,
    setToken : () => {}
})