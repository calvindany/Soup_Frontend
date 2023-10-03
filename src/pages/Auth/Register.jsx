import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "@/assets/css/TextField.css";
import "@/assets/css/Login.css";
import "@/assets/css/Root.css";

export default function Register() {
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
            <Typography variant="h4">
              Are you ready become a professional cheff?
            </Typography>
            <Typography variant="p" className="normal-text">
              Please register first
            </Typography>
          </div>
          <div className="group-text-field text-primary-color">
            <TextField
              required
              id="outlined-required"
              label="Name"
              defaultValue=""
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              defaultValue=""
            />
            <TextField
              required
              id="outlined-required"
              label="Confirm Password"
              defaultValue=""
            />
          </div>
          <div className="form-button">
            <Button
              variant="contained"
              className="text-primary-color button-primary"
            >
              Sign Up
            </Button>
          </div>
          <div>
            <Typography variant="p" className="normal-text">
              Have account?&ensp;
              <span className="hyperlink" onClick={() => navigate("/login")}>
                Login here
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
