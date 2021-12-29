import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getToken } from "../services/utils";

export let AuthContext = createContext({
  isAuth: "",
  setAuth: () => {},
});

export function AuthProvider({ children }) {
  let [isAuth, setAuth] = useState(null);
  let value = { isAuth, setAuth };
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (getToken()) {
      setAuth(true);
    }
  }, []);

  useEffect(() => {
    if (getToken() && !isAuth) {
      navigate(location.pathname);
    }
  }, [isAuth]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
