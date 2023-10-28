import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "@/assets/css/TextField.css";
import "@/assets/css/Login.css";
import "@/assets/css/Root.css";
import { useEffect, useState } from "react";
import axios from "axios";

import useAuth from "@/hooks/useAuth";

export default function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitLoginForm = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_API_BASE_URL}/Authentication/Login`,
        {
          email: email,
          password: password,
        }
      )
      .then((result) => {
        if (result.data.token) {
          login(result.data);
          toast.success("Login Success");
          navigate("/");
        } else {
          toast.error("Email dan password anda salah");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   console.log(email);
  // }, [email]);

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
              defaultValue={email}
              onChange={handleUsername}
              value={email}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              defaultValue={password}
              onChange={handlePassword}
              value={password}
            />
          </div>
          <div className="form-typography text-primary-color">
            <Typography variant="p" className="normal-text">
              Forgot Password?&ensp;
              <span
                className="hyperlink"
                onClick={() => navigate("/resetpassword")}
              >
                Click Here
              </span>
            </Typography>
          </div>
          <div className="form-button">
            <Button
              variant="contained"
              className="text-primary-color button-primary"
              onClick={submitLoginForm}
            >
              Login
            </Button>
          </div>
          <div style={{}}>
            <Typography variant="p" className="normal-text">
              Dont have account?&ensp;
              <span className="hyperlink" onClick={() => navigate("/register")}>
                Sign Up Here
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
