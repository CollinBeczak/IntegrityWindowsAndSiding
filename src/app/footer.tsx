"use client";

import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import { Facebook as FacebookIcon } from "@mui/icons-material";
import { Phone as PhoneIcon, Room as RoomIcon } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.9)" }}>
      <Grid p={2} container spacing={2}>
        {/* Company title */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" align="left">
            Integrity Siding & Window
          </Typography>
        </Grid>

        {/* Business Hours */}
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column">
            <Typography variant="body2">
              <b>Business Hours:</b>
            </Typography>
            <Typography variant="body2" textAlign="left">
              Mon-Fri: 8:00 AM – 8:00 PM
            </Typography>
            <Typography variant="body2" textAlign="left">
              Sat: 8:00 AM – 3:00 PM
            </Typography>
            <Typography variant="body2" textAlign="left">
              Sun: Closed
            </Typography>
          </Box>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column">
            <Link
              href="tel:+13167396106"
              variant="inherit"
              sx={{ mt: 2, overflow: "hidden", textOverflow: "ellipsis" }}
            >
              <Box display="flex" alignItems="center">
                <PhoneIcon />
                <Box ml={2}>
                  <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
                    Phone: +1 (316) 993-6426
                  </Typography>
                </Box>
              </Box>
            </Link>
            <Link
              sx={{ mt: 2, overflow: "hidden", textOverflow: "ellipsis" }}
              href="https://www.google.com/maps/place/2538+N+Lake+Ridge+Ct"
              target="_blank"
              rel="noopener noreferrer"
              variant="inherit"
            >
              <Box display="flex" alignItems="center">
                <RoomIcon />
                <Box ml={2}>
                  <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
                    Address: 2538 N. Lake Ridge Ct.
                  </Typography>
                </Box>
              </Box>
            </Link>
            <Link
              sx={{ ml: "3px", mt: 2, overflow: "hidden", textOverflow: "ellipsis" }}
              href="{https://www.facebook.com/profile.php?id=61551005436249"
              target="_blank"
              rel="noopener noreferrer"
              variant="inherit"
            >
              <Box display="flex" alignItems="center">
                <FacebookIcon fontSize="small" />
                <Box ml={2}>
                  <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
                    Facebook: https://www.facebook.com/profile.php?id=61551005436249
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box
        mt={2}
        py={1}
        bgcolor="primary.main"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body2" align="center" color="text.secondary">
          &copy; 2024 Window &amp; Siding Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
