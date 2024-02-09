import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/system";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const location = useLocation();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setServicesAnchorEl(null);
  };

  const menuItems = [
    { label: "Showcase", path: "/showcase" },
    { label: "Our Staff", path: "/staff" },
    { label: "Contact", path: "/contact" },
  ];

  const Services = [
    { label: "Windows", path: "/windows" },
    { label: "Siding", path: "/siding" },
    { label: "Trim", path: "/trim" },
    { label: "Doors", path: "/doors" },
    { label: "Gutters", path: "/gutters" },
    { label: "Roofing", path: "/roofing" },
  ];

  return (
    <AppBar position="fixed" sx={{ textAlign: "center", backgroundColor: "background.paper" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1400px",
          width: "100%",
          margin: "auto",
        }}
      >
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            textAlign: "left",
            fontFamily: "Comfortaa, sans-serif",
            fontWeight: "w400",
            color: "text.primary",
          }}
        >
          Integrity Siding & Windows
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{
              color: "text.primary",
              "& > span": {
                marginLeft: 0,
              },
            }}
            aria-controls="services-menu"
            aria-haspopup="true"
            endIcon={
              <KeyboardArrowDownIcon
                sx={{
                  mb: "1px",
                  transform: servicesAnchorEl ? "rotate(0deg)" : "rotate(270deg)",
                }}
              />
            }
            onClick={handleServicesClick}
          >
            Services
          </Button>
          {menuItems.map((menuItem) => (
            <Button
              key={menuItem.label}
              component={Link}
              to={menuItem.path}
              sx={{
                marginLeft: 2,
                color: "text.primary",
              }}
            >
              {menuItem.label}
            </Button>
          ))}
          <Menu
            id="services-menu"
            anchorEl={servicesAnchorEl}
            open={Boolean(servicesAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/services" onClick={handleClose}>
              View All Services
            </MenuItem>
            {Services.map((service) => (
              <MenuItem
                key={service.label}
                component={Link}
                to={service.path}
                onClick={handleClose}
              >
                {service.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <IconButton
          sx={{ display: { sm: "none" } }}
          edge="end"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.label}
              component={Link}
              to={menuItem.path}
              onClick={handleClose}
              sx={{
                color: "text.primary",
              }}
            >
              {menuItem.label}
            </MenuItem>
          ))}
          <MenuItem
            sx={{
              color: "text.primary",
            }}
            aria-controls="services-menu"
            aria-haspopup="true"
            onClick={handleServicesClick}
          >
            Services
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
