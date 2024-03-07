"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/system";

const Header = () => {
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);

  const handleServicesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setServicesAnchorEl(null);
  };

  const menuItems = [
    { label: "Showcase", path: "/showcase" },
    { label: "Contact", path: "/contact" },
  ];

  const Services = [
    { label: "View All Services", path: "/", sectionTitle: true },
    { label: "Premium Vinyl Windows", path: "/premium_vinyl_window", sectionTitle: true },
    {
      label: "- Premium Vinyl Patio Doors",
      path: "/premium_vinyl_window#premium_vinyl_patio_doors",
      sectionTitle: false,
    },
    { label: "Premium Vinyl Siding", path: "/premium_vinyl_siding", sectionTitle: true },
    { label: "- LP SmartSide", path: "/premium_vinyl_siding#lp_smartside", sectionTitle: false },
    { label: "- Hardie Board", path: "/premium_vinyl_siding#hardie_board", sectionTitle: false },
    { label: "Other Services", path: "/other_services", sectionTitle: true },
    { label: "- Premium Roofing", path: "/other_services#premium_roofing", sectionTitle: false },
    {
      label: "- Premium Outdoor Living",
      path: "/other_services#premium_outdoor_living",
      sectionTitle: false,
    },
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
            marginTop: { xs: 2.5, md: 0 },
            marginBottom: { xs: 1, md: 0 },
            fontSize: { xs: 19, sm: 25 },
            textDecoration: "none",
            textAlign: { xs: "center", md: "left" },
            fontFamily: "Comfortaa, sans-serif",
            fontWeight: 600,
            color: "text.primary",
            display: "block",
          }}
        >
          Integrity Siding and Window
        </Typography>
        <Box
          sx={{
            display: "flex",
            marginBottom: { xs: 0.5, md: 0 },
            justifyContent: "space-between",
          }}
        >
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
                  size: { xs: 12, sm: 12 },
                  transform: servicesAnchorEl ? "rotate(0deg)" : "rotate(270deg)",
                }}
              />
            }
            onClick={handleServicesClick}
          >
            <Typography
              sx={{
                fontFamily: "Comfortaa, sans-serif",
                fontSize: { xs: 13, sm: 15 },
                fontWeight: 600,
              }}
            >
              Services
            </Typography>
          </Button>
          {menuItems.map((menuItem) => (
            <Button
              key={menuItem.label}
              component={Link}
              href={menuItem.path}
              sx={{
                marginLeft: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Comfortaa, sans-serif",
                  fontSize: { xs: 12, sm: 14 },
                  fontWeight: 600,
                }}
              >
                {menuItem.label}
              </Typography>
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
                  fontSize: service.sectionTitle ? 16 : 14,
                  color: service.sectionTitle ? "text.primary" : "grey",
                }}
                onClick={handleClose}
              >
                <Typography
                  sx={{
                    fontFamily: "Comfortaa, sans-serif",
                    fontSize: { xs: 12, sm: 14 },
                    fontWeight: 600,
                  }}
                >
                  {service.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <IconButton sx={{ display: { xs: "none" } }} edge="end" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
