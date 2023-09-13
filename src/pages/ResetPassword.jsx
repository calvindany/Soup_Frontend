import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "../assets/css/TextField.css";
import "../assets/css/Login.css";
import "../assets/css/Root.css";

export default function ResetPassword() {
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
            <Typography variant="h4">Reset Password</Typography>
            <Typography variant="p" className="normal-text">
              Send OTP code to your email address
            </Typography>
          </div>
          <div className="group-text-field text-primary-color">
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
            />
          </div>
          <div className="form-button">
            <Button
              variant="outlined"
              className="text-primary-color button-secondary"
              onClick={() => navigate("/login")}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className="text-primary-color button-primary"
              onClick={() => navigate("/newpassword")}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
