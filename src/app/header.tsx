"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/system";
import useClient from "../hooks/useClient";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const isClient = useClient();

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleServicesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setServicesAnchorEl(null);
  };

  const menuItems = [
    { label: "Showcase", path: "/showcase" },
    { label: "Contact", path: "/contact" },
  ];

  const Services = [
    { label: "View All Services", path: "/" },
    { label: "Premium Vinyl Window", path: "/premium_vinyl_window" },
    { label: "Premium Vinyl Siding", path: "/premium_vinyl_siding" },
    { label: "- LP SmartSide", path: "/premium_vinyl_siding#lp_smartside" },
    { label: "- Hardie Board", path: "/premium_vinyl_siding#hardie_board" },
    { label: "Premium Roofing", path: "/premium_roofing" },
    { label: "Premium Decking & Patio", path: "/premium_decking_and_patio" },
  ];

  return (
    <AppBar position="fixed" sx={{ textAlign: "center", backgroundColor: "background.paper" }}>
      <Toolbar
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
          maxWidth: "1400px",
          width: "100%",
          margin: "auto",
        }}
      >
        <Typography
          variant="h5"
          component={Link}
          href="/"
          sx={{
            marginTop: { xs: 2, md: 0 },
            marginBottom: { xs: 0.5, md: 0 },
            fontSize: { xs: 19, sm: 25 },
            textDecoration: "none",
            textAlign: { xs: "center", md: "left" },
            fontFamily: "Comfortaa, sans-serif",
            fontWeight: "w400",
            color: "text.primary",
            display: "block",
          }}
        >
          Integrity Siding and Window
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            sx={{
              color: "text.primary",
              fontSize: { xs: 13, sm: 15 },
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
                  size: { xs: 13, sm: 15 },
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
              href={menuItem.path}
              sx={{
                marginLeft: 2,
                fontSize: { xs: 13, sm: 15 },
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
            {Services.map((service) => (
              <MenuItem
                key={service.label}
                component={Link}
                href={
                  service.path.startsWith("/")
                    ? `/services${service.path}`
                    : service.path.replace(/- /g, "#")
                }
                sx={{
                  fontSize: 16,
                  color: "text.primary",
                }}
                onClick={handleClose}
              >
                {service.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <IconButton
          sx={{ display: { xs: "none" } }}
          edge="end"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
