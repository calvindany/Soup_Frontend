import { Route, Routes, useLocation } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import NewPassword from "../pages/NewPassword";
import EmailConfirmation from "../pages/EmailConfirmation";

export default function Router() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/newpassword" element={<NewPassword />} />
        <Route
          exact
          path="/emailconfirmation"
          element={<EmailConfirmation />}
        />
      </Routes>
    </>
  );
}
