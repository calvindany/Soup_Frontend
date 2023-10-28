import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

function setCookie(cookie_name, cookie_value) {
  Cookies.set(cookie_name, cookie_value);
}

function getCookie(cookie_name) {
  console.log(Cookies.get(cookie_name));
}

function getIsLoggedIn(cookie_name) {
  const payload = Cookies.get(cookie_name);

  const isLoggedIn = payload !== null && payload !== "";

  return isLoggedIn;
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(getIsLoggedIn("payload"));
  const [payload, setPayload] = useState("");

  // useEffect(() => {
  //   console.log(isLoggedIn);
  // }, [isLoggedIn]);

  const login = (payload) => {
    setIsLoggedIn(true);

    setCookie("payload", JSON.stringify(payload));

    setPayload(payload);
  };

  const logout = () => {
    getCookie("payload");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        payload,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
