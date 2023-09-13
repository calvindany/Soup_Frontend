import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "../assets/css/TextField.css";
import "../assets/css/Login.css";
import "../assets/css/Root.css";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div className="form-typography text-primary-color">
            <Typography variant="h4">Welcome Back! Cheff</Typography>
            <Typography variant="p" className="normal-text">
              Please login first
            </Typography>
          </div>
          <div className="group-text-field text-primary-color">
            <TextField
              required
              id="outlined-required"
              label="Username"
              defaultValue=""
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              defaultValue=""
            />
          </div>
          <div className="form-typography text-primary-color">
            <Typography variant="p" className="normal-text">
              Forgot Password?&ensp;
              <span
                className="hyperlink"
                onClick={() => navigate("/forgotpassword")}
              >
                Click Here
              </span>
            </Typography>
          </div>
          <div className="form-button">
            <Button
              variant="contained"
              className="text-primary-color button-primary"
            >
              Login
            </Button>
          </div>
          <div style={{}}>
            <Typography variant="p" className="normal-text">
              Dont have account?&ensp;
              <span className="hyperlink" onClick={() => navigate("/signup")}>
                Sign Up here
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
