import { useContext } from "react";

import { AuthContext } from "@/context/AuthContext";

export default function useAuth() {
  const { isLoggedIn, payload, login, logout } = useContext(AuthContext);

  return {
    isLoggedIn,
    payload,
    login,
    logout,
  };
}
