import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";

import Logo from "@/assets/img/logo.png";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        component="nav"
        style={{
          backgroundColor: "#fff",
          padding: "10px 70px",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              src={Logo}
              alt="Logo Soup"
              style={{ maxWidth: "50px", cursor: "pointer" }}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <div style={{ display: "flex", gap: "20px" }}>
              <Button
                variant="outlined"
                className="button-secondary text-primary-color"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                variant="contained"
                className="button-primary text-primary-color"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
