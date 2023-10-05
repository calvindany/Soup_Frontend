import { Route, Routes, useLocation } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ResetPassword from "../pages/Auth/ResetPassword";
import NewPassword from "../pages/Auth/NewPassword";
import EmailConfirmation from "../pages/Auth/EmailConfirmation";
import LandingPage from "../pages/User/LandingPage";
import ListMenuClass from "../pages/User/ListMenuClass";
import DetailClass from "../pages/User/DetailClass";
import Checkout from "../pages/User/Checkout";
import DetailInvoice from "../pages/User/DetailInvoice";

export default function Router() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          exact
          path="/listmenuclass/:categoryId"
          element={<ListMenuClass />}
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/newpassword" element={<NewPassword />} />
        <Route
          exact
          path="/emailconfirmation"
          element={<EmailConfirmation />}
        />
        <Route exact path="/detailclass/:courseId" element={<DetailClass />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/detail-invoice" element={<DetailInvoice />} />
      </Routes>
    </>
  );
}
