import { Route, Routes, useLocation } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ResetPassword from "../pages/Auth/ResetPassword";
import NewPassword from "../pages/Auth/NewPassword";
import EmailConfirmation from "../pages/Auth/EmailConfirmation";
import LandingPage from "../pages/User/LandingPage";

export default function Router() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<LandingPage />} />
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
