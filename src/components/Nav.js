import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Resume from "../assets/resume/Resume.pdf";

const pages = ["About me", "Portfolio", "Contact", "Resume"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar({ pageState, setPageState }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenAbout = () => {
    setPageState({
      ...pageState,
      aboutPage: true,
      portfolioPage: false,
      contact: false,
    });
  };
  const handleOpenPortfolio = () => {
    setPageState({
      ...pageState,
      aboutPage: false,
      portfolioPage: true,
      contact: false,
    });
  };
  const handleOpenContact = () => {
    setPageState({
      ...pageState,
      aboutPage: false,
      portfolioPage: false,
      contact: true,
    });
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">About me</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Portfolio</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Resume</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleOpenAbout}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About me
            </Button>
            <Button
              onClick={handleOpenPortfolio}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              portfolio
            </Button>
            <Button
              onClick={handleOpenContact}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              contact
            </Button>
            <a href={Resume} target="_blank">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Resume
              </Button>
            </a>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography variant="h4" component="h2">
              Trizzie Huynh
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
