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
            <Typography variant="h4">Create Password</Typography>
            <Typography variant="p" className="normal-text"></Typography>
          </div>
          <div className="group-text-field text-primary-color">
            <TextField
              required
              id="outlined-required"
              label="New Password"
              defaultValue=""
            />
            <TextField
              required
              id="outlined-required"
              label="Confirm New Password"
              defaultValue=""
            />
          </div>
          <div className="form-button">
            <Button
              variant="outlined"
              className="text-primary-color button-secondary"
              onClick={() => navigate("/resetpassword")}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className="text-primary-color button-primary"
              onClick={() => navigate("/login")}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
