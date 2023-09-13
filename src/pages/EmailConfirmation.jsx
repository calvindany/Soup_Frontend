import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";

import "../assets/css/Root.css";

import Character from "../assets/img/character.png";

export default function EmailConfirmation() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: " 30px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={Character}
          alt="Character Image"
          style={{ maxHeight: "40vh" }}
        />
        <div style={{ textAlign: "center" }}>
          <Typography variant="h4">Email Confirmation Success</Typography>
          <Typography variant="p" className="normal-text">
            Congratulations! your email has already used.
          </Typography>
        </div>
        <Button
          variant="contained"
          className="text-primary-color button-primary"
          onClick={() => navigate("/login")}
        >
          Login Here
        </Button>
      </div>
    </>
  );
}
