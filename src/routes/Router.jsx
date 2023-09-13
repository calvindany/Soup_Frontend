import { Route, Routes, useLocation } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Router() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
