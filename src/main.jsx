import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./assets/css/Root.css";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
