import { Outlet, Navigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";

export default function ProtectedRoutes() {
  const { isLoggedIn } = useAuth();

  // useEffect(() => {
  //   console.log(isLoggedIn);
  // }, []);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
