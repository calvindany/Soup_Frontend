import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./assets/css/Root.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
